import { forwardRef, Component } from 'react';

export default function CreateModal(ChildComponent) {
    class Dialog extends Component {
        constructor(_props) {
            super(_props);
            this.state = {
                el: null,
                visible: false,
                open: false
            };
            const handles = ['open', 'close', 'remove'];
            handles.forEach(item => this[item] = this[item].bind(this));
        }

        open() {
            const el = document.createElement('div');
            document.body.appendChild(el);
            this.setState({
                el,
                open: true,
                visible: true
            });
        }

        close() {
            this.setState({
                visible: false
            });
        }

        remove() {
            const { el } = this.state;

            if (el && document.body.contains(el)) {
                document.body.removeChild(el);
            }
            this.setState({
                open: false
            });
        }

        render() {
            const { open, visible, el } = this.state;
            const dialogProps = {
                visible: visible,
                onCancel: this.close,
                afterClose: this.remove,
                getContainer: el,
                onOpen: this.open
            };

            return open ? <ChildComponent {...dialogProps} {...this.props} /> : null;
        }
    }

    return forwardRef((props, ref) => <Dialog {...props} ref={ref} />);
}
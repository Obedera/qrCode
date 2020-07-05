import React from 'react'
class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            const imgState = {
                file: file,
                imagePreviewUrl: reader.result,
                name: this.props.name || ''
            }
            this.props.updateImg(imgState)

        }

        reader.readAsDataURL(file)
    }

    render() {


        return (
            <input className="fileInput"
                type="file"
                onChange={(e) => this._handleImageChange(e)} />
        )
    }
}
export default ImageUpload;
import imageData from "../imageData/imageData";

function Background (props) {

    const backgroundStyle = {
        backgroundImage: 'url(' + imageData[0] + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize:  'cover',
        height: '100vh'
    }

    return <div style={backgroundStyle}>
        {props.children}
    </div>
}

export default Background;
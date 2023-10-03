function Background (props) {

    const backgroundStyle = {
        backgroundImage: `url(./scenicImage0.jpg)` 
    }

    return <div>
        <img src={props.image} alt='seaside'></img>
        {props.children}
    </div>
}

export default Background;
import { IKImage } from "imagekitio-react"

type PropsType = {
    src: string,
    className?: string,
    w?: number | string,
    h?: number | string,
    alt?: string
}
const Image = ({src, className, w, h, alt}: PropsType) => {
    return (
        <IKImage
        urlEndpoint= {import.meta.env.VITE_IK_URLENDPOINT}
        path={src}
        className={className}
        loading='lazy'
        lqip={{active: true, quality: 20}}
        alt={alt}
        width={w}
        height={h}
        transformation={[
            {width: w?.toString(), height: h?.toString()}
        ]}
        />
    )
}

export default Image
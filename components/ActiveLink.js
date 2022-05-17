import Link from 'next/link'


const ActiveLink = ({ text, href }) => {

    return (
        <Link href={href}>
            <a>{ text }</a>
        </Link>
    )
}

export default ActiveLink
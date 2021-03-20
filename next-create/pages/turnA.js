import Link from 'next/link'

export default ()=>(
    <>
        <div>TurnA page</div>
        <Link href='/'>
            <a>
                <span>返回首頁</span>
                <span>icon</span>
            </a>
        </Link>
    </>
)

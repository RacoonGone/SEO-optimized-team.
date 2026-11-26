import Sec1 from "@/components/pages/home/sec1/Sec1";
import Sec2 from "@/components/pages/home/sec2/Sec2"
import Sec3 from "@/components/pages/home/sec3/Sec3"
import Sec4 from "@/components/pages/home/sec4/Sec4"
import Sec5 from "@/components/pages/home/sec5/Sec5"
import Sec6 from "@/components/pages/home/sec6/Sec6"

export default function Home() {
    return (
        <>
            <main className='main-content page-template'>
                <Sec1/>
                <Sec2 />
                <Sec3 />
                <Sec4 />
                <Sec5 />
                <Sec6 />
            </main>
        </>
    )
}

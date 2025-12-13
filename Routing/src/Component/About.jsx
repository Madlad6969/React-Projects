import { Suspense } from "react"

function About () {
    return (
        <>
        <Suspense fallback={<p>Loading...</p>}>
        <h1>This is my About page </h1>
        </Suspense>
        </>
    )
}

export default About
import Header from "../../components/Header/Header.jsx";
import PreviewCard from "../../components/product-preview-card/PreviewCard";

function Home () {
    return (
        <>
        <Header/>
        <main className="home">
            <div className="container">
                <div className="main-content-wrapper">
                    <PreviewCard />
                </div>
            </div>
        </main>
        </>
    )
}

export default Home;    
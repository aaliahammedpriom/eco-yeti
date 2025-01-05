import Banner from "../component/home/Banner";
import Footer from "../component/home/Footer";
import Header from "../component/home/Header";
import Main from "../component/home/Main";
import "animate.css"

const Home = () => {
    return (
        <div className="flex flex-col gap-10 ">
            <nav className="bg-green-100 ">
                <Header ></Header>
            </nav>
            <header className="">
                <Banner></Banner>
            </header>
            <main  >
                <Main></Main>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;
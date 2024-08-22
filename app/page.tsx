import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
export default function Home() {

  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  return (
    <>
    <NavBar />
    <main className="h-screen">
        <div className=" dark:text-white max-w-xl flex justify-center place-items-center m-auto">
            <div className="relative pt-[0px] h-[600px]">
                <Image src="/roman.png" alt="My Image" width={900} height={100} className="m-auto mt-[200px] imagequery rounded-lg" style={{filter: 'grayscale(50%) contrast(1.5) brightness(0.3)'}}/>
                <div className="relative pos w-3/4 h-full text-yellow-100">
                    <h1 className="text-5xl">Luan Ajeti</h1>
                    <p className="pb-4 md:text-[1rem] text-[.9rem] w-5/6 md:w-full">Ich bin Luan, ein Webentwickler und ich schreibe Artikel über Religion, Philosophie, und Programmieren.</p>
                    <Link href={"/blogs"} className="buton z-index-[10] md:text-sm text-[10px] md:p-4 p-3 rounded-md text-black bg-yellow-100 hover:bg-[#858266] hover:text-white duration-300 transition ease-in-out">lese Artikel</Link>
                </div>
            </div>
        </div>
        <div className="text md:w-2/6 w-3/4 bg-[#d6d2a3] p-4 mb-10 rounded m-auto justify">
          <h1 className="font-black text-4xl">Wofür habe ich diese Seite Erstellt?</h1>
          <p>Ich möchte mein Wissen weiter vermitteln und da ich sowieso gerne viel schreibe und lese, dachte ich mir wieso nicht selber ein Blog machen wo ich mein Wissen mit anderen Menschen teilen kann. Ich will außerdem auch mein philosopisches Weltbild publizieren und das werde ich Hauptsächlich durch diesen Blog machen. Ich habe vor ungefähr drei und halb Jahren angefangen zu Programmieren und es ist eines meiner Hauot interessen deshalb dachte ich mir wieso nicht auch Programmieren mit inkludieren in den Inhalten meiner Blog Posts.</p>
          <h1 className="font-black text-4xl pt-14">Was werden die Haupt Themen sein?</h1>
          <p>Vorallem der Islam und Atheismus werdem hier eine große Rolle spielen. Ich bin auf der suche nach Gottesbeweisen die Logik beinhalten und nicht gewertet sind nach rationalitet oder sentimentalität, da sie Subjektiv sind. Ich will Objektive Gottes beweise! Das werden aber wohl nicht die einzigen Philosophischen themen sein. Freier Wille, Seele, leben nach den Tod und weitere spannende älteste ungeklärte menschen Fragen werden versucht beantwortet zu werden. Nebensächlich will ich in Zukunft, also warscheinlich habe ich schon angefangen damit wenn du das ließt, aber ich will anfangen mit embedded software engineering und ich werde versuchen meinen Fortschritt mit zu dokumentieren und das programmierte auch hier zu publizieren. Auch Website programmierung und nebensächliche Projekte mit C++ und Python werden hier auch zur schau gestellt.</p>
        </div>

        <Footer />
    </main>
    </>
  );
}

import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticleData } from "@/lib/articles"
import NavBar from "../components/NavBar"

const Article = async ({ params }: { params: { blogs: string } }) => {
  const articleData = await getArticleData(params.blogs)

  return (
    <>
    <NavBar />
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <div className="flex justify-between font-poppins">
        <Link href={"/blogs"} className="dark:text-white flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon width={20} />
          <p>zurück zu den blogs</p>
        </Link>
        <p className="dark:text-white">{articleData.date.toString()}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHTML }}
      />
    </section>
    </>
  )
}

export default Article
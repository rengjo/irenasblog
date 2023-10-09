import Posts from "./components/Posts"
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hallo und Willkommen 👋&nbsp;
        <span className="whitespace-nowrap">
          auf <span className="font-bold">Irena&apos;s</span> Blog.
        </span>
      </p>
      <Posts />
    </main>
  )
}
"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menubar } from "@/components/ui/menubar";
import { Apifetch } from "@/components/items/apifetch";



export default function Dashboard ({error }) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;

  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      router.push("/login")
    }
  }, [router])

  const handlelogout = () => {
    localStorage.removeItem("jwtToken")
    router.push("/login")
  }
  useEffect(() => {
    async function getPosts() {
      try {
        const data = await Apifetch();
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        setError('Failed to fetch data');
      }
    }
    getPosts();
  }, []);
  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase()) || post.id.toString().includes(search)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [search, posts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = (filteredPosts ?? []).slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil((filteredPosts ?? []).length / postsPerPage);
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div>
      <div className="flex flex-row bg-blue-700 align-top justify-between  h-10 space-y-4">
        <div className="flex flex-row items-center justify-center w-32 h-9">
        <h1
          className="text-white font-extrabold">Dashboard</h1></div> 
        <Menubar
          className="bg-white shadow-lg w-24 h-9"
        />
      <div className="flex flex-row items-center justify-center w-32 h-9">
        <Button
          onClick={handlelogout}
          className="w-20 h-7 bg-primary flex text-primary-foreground shadow-xs hover:bg-primary/90"
        >Sign Out
        </Button>
        </div>
      </div>
       {/* Main Content */}
       <div className="flex-1 p-5">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title or ID..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        {/* Table */}
        <div className="overflow-auto border rounded-lg">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">User ID</th>
                <th className="p-2">ID</th>
                <th className="p-2">Title</th>
                <th className="p-2">Body</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map(post => (
                <tr key={post.id} className="border-t">
                  <td className="p-2 text-center">{post.userId}</td>
                  <td className="p-2 text-center">{post.id}</td>
                  <td className="p-2">{post.title}</td>
                  <td className="p-2">{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

import "./App.css";
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Index = () => {
  return <p>這是首頁</p>;
};

const Logout = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate("/login");
      }}
    >
      登出
    </button>
  );
};

const Post = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>這是 Post 詳細頁面</h3>
      <button
        type="button"
        onClick={() => {
          navigate("/post/post123");
        }}
      >
        點入
      </button>
      <Outlet />
    </>
  );
};

const PostId = () => {
  let params = useParams();
  return <p>PostID: {params.postId}</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;

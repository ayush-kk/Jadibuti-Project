import { Link } from "react-router-dom";
function AdminHeader() {
    return (
        <div className="container-fuild">
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark shadow p-3 mb-5" >
            <a className="navbar-brand" href="/home">Logo</a>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/medicine/all" className="nav-link">Medicine</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/order/all" className="nav-link">Orders</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/customer/all" className="nav-link">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default AdminHeader;
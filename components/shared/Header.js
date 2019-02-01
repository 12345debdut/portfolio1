import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownItem,
DropdownToggle,
DropdownMenu,
Dropdown
} from 'reactstrap';
 import {Link} from '../../routes';
 import auth0 from '../../services/auth0';

 const Login=()=>{
   return (
     <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
   );
 }
 const Logout=()=>{
   return(
     <span onClick={auth0.logout} className="nav-link port-navbar-link clickable">Logout</span>
   );
 }

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1=this.toggle1.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen:false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggle1() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  renderBlogMenu(){
    const {isSiteOwner}=this.props;
    if(isSiteOwner){
      return(
        <Dropdown className="port-navbar-link port-dropdown-menu" isOpen={this.state.dropdownOpen} toggle={this.toggle1}>
          <DropdownToggle className="port-dropdown-toggle" nav caret >
            Blog
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem><Link route="/blogs"><a className="port-dropdown-item">Blog</a></Link></DropdownItem>
            <DropdownItem ><Link route="/blogs/new"><a className="port-dropdown-item">Create a Blog</a></Link></DropdownItem>
            <DropdownItem><Link route="/blogs/dashboard"><a className="port-dropdown-item">Dashboard</a></Link></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    }
    else{
      return(
        <Link href='/blogs'>
        <a className="nav-link port-navbar-link">Blogs</a>
        </Link>
      )
    }
    
  }
  render() {
    const {isAuthenticated,user,className}=this.props;
    const {isOpen}=this.state;
    const menuOpenClass=isOpen?'menu-open':'menu-close';
    return (
      <div>
        <Navbar color="light" dark expand="md" className={`${className} port-navbar port-nav-base absolute ${menuOpenClass}`} color="transparent">
          <NavbarBrand href="/" className="port-navbar-brand">Debdut Saha</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
			  <NavItem className="port-navbar-item">
			  <Link href='/'>
			  <a className="nav-link port-navbar-link">Home</a>
			  </Link>
			  </NavItem>
			  <NavItem className="port-navbar-item">
        {this.renderBlogMenu()}
			  </NavItem>			 
			   <NavItem className="port-navbar-item">
			   <Link href='/about'>
			   <a className="nav-link port-navbar-link">About</a>
			   </Link>
			  </NavItem>			  
			  <NavItem className="port-navbar-item">
			  <Link href='/cv'>
			  <a className="nav-link port-navbar-link">Cv</a>
			  </Link>
			  </NavItem>
			  <NavItem className="port-navbar-item" >
			  <Link href='/portfolios'>
			  <a className="nav-link port-navbar-link">portfolios</a>
			  </Link>
        </NavItem>
        {
          !isAuthenticated &&
          <NavItem className="port-navbar-item" >
            <Link href='/portfolios'>
            <Login/>
              </Link>
                </NavItem>
        }
        {
          isAuthenticated &&
          <NavItem className="port-navbar-item" >
            <Link href='/portfolios'>
              <Logout/>
              </Link>
          </NavItem>
        }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


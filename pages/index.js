import Link from 'next/link';

const Index = () => {
  return (
    <header>
      <nav className="nav">
        <Link className="link" href="/">
          Main
        </Link>
        <Link className="link" href="/users">
          Users
        </Link>
      </nav>
      <h1>Main page</h1>;
    </header>
  );
};

export default Index;

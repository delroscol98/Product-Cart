function Menu({ children }) {
  return (
    <section className="menu">
      <h1 className="heading-1">Desserts</h1>
      {children}
    </section>
  );
}

export default Menu;

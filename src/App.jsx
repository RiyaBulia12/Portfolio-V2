const App = () => {
  return (
    <div className="grid xs:grid-rows lg:grid-cols-2 place-items-center h-screen mx-18 lg:mx-36">
      <div>
        <img className="rounded-t-full" src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80" alt="My photos"></img>
      </div>
      <div className="">
        <h1 className="font-classy text-9xl">Riya Bulia</h1>
        <p className="uppercase"> Software Engineer</p>
      </div>
    </div>

  )
}

export default App

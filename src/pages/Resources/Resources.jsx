const Resources = ({ user }) => {
  return (
    <main>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Resources
import headerStyle from '../styles/header.module.css'

function Header() {
  return (
    <div className={headerStyle.header}>
    <h2 className={headerStyle.title}>POC</h2>
    <h3 className={headerStyle.subTitle}>React Forum</h3>

    </div>
  )
}

export default Header
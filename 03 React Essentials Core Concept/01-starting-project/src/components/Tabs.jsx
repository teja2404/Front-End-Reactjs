export default function Tabs({ children, button, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  )
}
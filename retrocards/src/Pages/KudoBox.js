function KudoBox (){

  const goToCreateKudoCard = ()=>{
    
    window.location.href = '/createkudocards'
  }
  
  return(
    <div>
      <h1>Página KudoBox</h1>
      <button onClick={()=> goToCreateKudoCard()}>Criar novo Kudo Card </button>
      <p>Kudo card</p>
      <p>Kudo card</p>
      <p>Kudo card</p>
      <p>Kudo card</p>
    </div>
  )
}

export default KudoBox;
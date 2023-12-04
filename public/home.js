function Home(){
  return (
    <Card
      bgcolor="info"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Welcome! Let us help you achieve your financial goals"
      text="Start by enjoying $100 when you open a new checking account"
      body={(<img src="moneycloseup.jpg" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}

const bringDataFromGoogleSheet = () => {
  fetch(
    'https://script.google.com/macros/s/AKfycbyorVI5TNQKBWzBbd_jRLzgRhGN1uex-J2vQyEPWCITJDafdwTPys9h6Pg_VmUg82yZ9A/exec',
    {
      method: 'GET',
    }
  )
    .then((res) => res.text())
    .then((rep) => {
      let data = JSON.parse(rep);
      console.log(data.content);
    })
    .catch((err) => console.log(err));
};

export default bringDataFromGoogleSheet;

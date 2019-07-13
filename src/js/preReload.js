window.onload=()=>{
  let preReload = document.getElementsByClassName("pre-reload");
  [].forEach.call(preReload,(reset)=>{
      reset.classList.remove('pre-reload');
  })
}
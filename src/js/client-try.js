//Ana lucia Diaz Leppe
//151378
//Web
//Se determina el estado inicial de la pagina

//Se utilizo para el chequeo de las cajas
  
  const render = (lState) => {
  
    const root = document.getElementById('root');


    if (root.hasChildNodes()) {
      root.innerHTML = null;
  }

    const cabeza = document.createElement('div');
  
    cabeza.className = `cabeza`;
  
    
  //Se determina el encabezado en donde se encuentran los botones
    for (let i = 0; i < lState.estados.length; i++){
  
      const tab = Actividad(lState, i);
  
      cabeza.appendChild(tab);
  
    }
  
    //se determinan las bandejas y el nombre
  
    const bandejas = document.createElement('button');
  
    bandejas.className = 'bandejas';

    

    const title = document.createElement('h1');
    title.innerHTML = 'CORTO WEB';
  
  

  
      //imprime todas las tareas
  
      for (let j = 0; j < lState.data.length; j += 1) {
  
        const work = crearelemento(lState, j);
  
        if (work != undefined) {
  
            bandejas.appendChild(work);
        
      }
  
    }
  
    //todos los componentes
  
    const completado = document.createElement('button');
  
    completado.className = 'completado';
  
    const enviar = document.createElement('div');
  
    enviar.className = 'enviar';

    const escribir = document.createElement('input');
  
    escribir.setAttribute('type', 'text');
  
    escribir.className = 'escribir';


    
    
 
    const nuevo = document.createElement('button');
  
    nuevo.className = 'nuevo';
  
    nuevo.innerHTML = 'Generar';
  
    // se le determina que al apachar submit se envia el texto
  
    nuevo.onclick = () => {
    escrbir(escribir, lState);
    alert("Se a ingresado un nuevo numero");
  };
  
  
  //es importante el orden ya que este determina el orden de envio
    enviar.appendChild(escribir);
    enviar.appendChild(nuevo);
    root.appendChild(title);
    root.appendChild(cabeza);
    root.appendChild(bandejas);
    root.appendChild(enviar);
  
  }
  
  const state = {

    estados: ['TODOS', 'COMPLETADOS'],
  
    activo: 0,
  
    data: [],
  
    

  
  }
  //se determina el fetch
  
  fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json')
  
    .then( response => response.json() )
  
    .then( responseJSON => { responseJSON.forEach( (element) => state.data.push(element) ) })
  
  
    
  

  const Actividad = (lState, indice) => {
  
    const tab = document.createElement('button');
    
    tab.innerHTML = `${lState.estados[indice]}`;
  
    if (indice === lState.activo) {
  
      tab.className = `tab ${indice} activo`;
  
    } else {
  
      tab.className = `tab ${indice}`;
  
    }
  
    tab.onclick = (self) => EncenderClick(self.target, lState);
  
    return tab;
  
  }
  
  
  
  const crearelemento = (lState, j) => {
  
    const elemento = lState.data[j].isCompleted;
  
    const work = document.createElement('div');
  
    work.className = `work ${j} round`;
  
    work.innerHTML = `${lState.data[j].title}`;

    
  
  
  
    // chequea si todo ya esta completado
  
    if (elemento) {
  
      work.className = `${work.className} elemento`;
  
    }
  
  
    work.onclick = (self) => {
    workClick(self.target, lState, i);
  }
  
  
  
    // chequea los diferentes estados siendo activo, completado y todos
  
    if (lState.activo === 1) {
  
  
      if (elemento) {
  
        return work;
  
      }
  
    } else if (lState.activo === 2) {

  
      if (!elemento) {
  
        return work;
  
      }
  
    } else if (lState.activo === 0) {
  
      return work;
  
    }
  
  }
  
  const workClick = (self, lState, indice) => {
  
    lState.data[indice].isCompleted = !lState.data[indice].isCompleted;
    


  
    render(lState)
  
  }
  
  
  const EncenderClick = (self, lState) => {
  
    lState.activo = parseInt(self.className.split(' ')[1]);
   
  
    render(lState)
  
  }
  
  
  const escrbir = (input, lState) => {
  
    let wall = {
  
      id: 0,
  
      title: '',
  
      isCompleted: false,
  
    }
 
  
    if (input.value == '') {
  
      return 1;
  
    }
  
  
  
    wall.title = input.value;
  
    wall.id = parseInt(lState.data[lState.data.length - 1].id) + 1;
  
  
  
    lState.data.push(wall);
  

    render(lState);
  
    return wall;
  
  }
  
  
  
  render(state);
  
//Ana lucia Diaz Leppe

//151378

const state = {

  quierover: ['h1', 'h2', 'h3','h4','h5'],

  currentLight: 0,

};

const buildInitialState = (len) => {

  return ({

      statusMap: Array.from({length: len}, (x, i) => Array.from({length: len}, (y, j) => null)),

      currentPlayer: 0,

      winner: null

  });

};

const render = lState => {

  const title = document.createElement('h1');

  title.innerHTML = 'TAREAS';



  const nextBtn = document.createElement('button');

  nextBtn.className = 'nextBtn';

  nextBtn.innerHTML = 'ALL';



  const aceptarturno = document.createElement('button');

  aceptarturno.className = 'aceptarturno';

  aceptarturno.innerHTML = 'COMPLETED';



  const nuevo = document.createElement('button');

  nuevo.className = 'nuevo';

  nuevo.innerHTML = 'ACTIVE';



  const turnoContainer = document.createElement('input');

  turnoContainer.className = 'turnoContainer';
  



  const search = document.createElement('button');

  search.className = 'search';

  search.innerHTML = 'ADD';



  const totito = document.createElement('div');

  totito.className = 'totito';


  const next = document.createElement('button');

  next.className = 'next';

  next.innerHTML = 'presionar para escoger casilla';



  







  // Clear previous root content

  if (root.hasChildNodes()) {

    root.innerHTML = null;

  }

  // creacion de containers

  root.appendChild(title);

  root.appendChild(nextBtn);

  root.appendChild(aceptarturno);

  root.appendChild(nuevo);

  root.appendChild(next);

  root.appendChild(totito);

  root.appendChild(turnoContainer);

  root.appendChild(search);

  



  const lightElements = lState.quierover.map(

    (lightColor, i, j) => {

      const lightElement = document.createElement('ul');

      lightElement.className = `light ${lightColor}`;

  

      if (i === lState.currentLight) {

        lightElement.classList.add('on');

        

      }

      return lightElement;

    }

  );



  



  lightElements.forEach(

    lightElement => totito.appendChild(lightElement)

  );

 





  // Events

  nextBtn.onclick = () => {

    lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;

    render(lState);

  };
  search.onclick = () => {

    lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;
    render(lState);
    var texto = prompt('Esciba lo que desea enviar al sistema');
  };

  aceptarturno.onclick = () => {

    lState.currentLight = (lState.currentLight) % lState.quierover.length;

    render(lState);

  };

  nuevo.onclick = () => {

    lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;

    render(lState);

  };
  next.onclick = () => {

    lState.currentLight = (lState.currentLight + 1) % lState.quierover.length;

    render(lState);

  };



}

  





render(state);
  
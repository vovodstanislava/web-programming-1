const ex1 = () => {
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    const result = document.getElementById('result');

    result.innerText = Number(document.getElementById('inputy').value) + Number(document.getElementById('inputx').value)
  })
};

const ex2 = () => {
  const button = document.getElementById('button1');

  button.addEventListener('click', () => {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp
  })
};

const ex3 = () => {
  const container = document.getElementById('container');

  container.addEventListener('mouseover', () => {
    container.setAttribute('class', 'green')
  })
};

const ex4 = () => {
  const app = document.getElementById('app');

  for (let i = 1; i <= 10; i++) {
    const p = document.createElement('p');
    p.innerText = `Paragraph NR ${i}`;

    if (i % 2 === 0) {
      p.setAttribute('style', 'background: blue')
    } else {
      p.setAttribute('style', 'background: yellow')
    }

    app.append(p)
  }
};

const ex5andEx6 = () => {
  const app = document.getElementById('app');
  const ol = document.createElement('ol');

  ol.setAttribute('id', 'list');

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.innerText = `Element NR ${i}`;

    if (i === 10) {
      li.setAttribute('style', 'background: violet')
    }

    ol.append(li)
  }

  app.append(ol)
};

const ex7 = () => {
  const app = document.getElementById('app');
  const button = document.createElement('button');

  button.innerText = 'Remove el 5';

  button.addEventListener('click', () => {
    const list = document.getElementById('list');
    list.removeChild(list.childNodes[4]);
  });

  app.append(button)
};

const ex8 = () => {
  const app = document.getElementById('app');

  for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'circle');
    app.append(div)
  }
};

const ex9 = () => {
const app = document.getElementById('app');
const array = [5, 6, 2, 1, 5, 6, 7, 8, 9, 10];
const sortedArray = array.sort((a, b) => a - b);

for (let i = 0; i < sortedArray.length; i++) {
const div = document.createElement('div');
div.innerText = sortedArray[i];
app.append(div)
}
};

const ex10 = () => {
  const app = document.getElementById('app');

  setTimeout(() => {
    app.setAttribute('style', 'background: gray')
  }, 5000)
};

const ex11 = () => {
  const list = document.getElementById('list');

  setInterval(() => {
    const li = document.createElement('li');
    li.innerText = `Element NR ${list.childNodes.length + 1}`;
    list.append(li)
  }, 10000)
};

const ex12 = () => {
  const app = document.getElementById('app');
  const button = document.createElement('button');

  button.innerText = 'Counter 1';

  button.addEventListener('click', () => {
    button.innerText = `${button.innerText.split(' ')[0]} ${Number(button.innerText.split(' ')[1]) + 1}`;
  });

  app.append(button)
};

const ex13 = () => {
  const app = document.getElementById('app');
  const ul = document.createElement('ul');
  const array = [1, 4, 5, 6, 7, 8, 0, 9, 6, 3];

  ul.setAttribute('id', 'list2');
  app.append(ul);

  let i = 0;

  setInterval(() => {
    if (i < array.length) {
      const li = document.createElement('li');

      li.innerText = array[i];
      ul.append(li);
      i++
    }
  }, 1000)
};

const ex14 = () => {
  setTimeout(() => {
    const list = document.getElementById('list2');

    for (let i = 0; i < list.childNodes.length; i++) {
      list.childNodes[i].setAttribute('title', Number(list.childNodes[i].innerText) ** 2)
    }
  }, 10000)
};


ex1();
ex2();
ex3();
ex4();
ex5andEx6();
ex7();
ex8();
ex9();
ex10();
ex11();
ex12();
ex13();
ex14();

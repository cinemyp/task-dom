/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const elem = document.createElement(tag);
        elem.innerHTML = content;
        document.body.append(elem);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let currentLevel = 1;
    const root = document.createElement('div');
    root.className = `item_${currentLevel}`;
    makeLeaf(root, currentLevel + 1);

    function makeLeaf(root, n) {
        for (let i = 0; i < childrenCount; i++) {
            const leaf = document.createElement('div');
            leaf.className = `item_${n}`;
            root.append(leaf);
            if (n < level) {
                makeLeaf(leaf, n + 1);
            }
        }
    }
    return root;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const tree = generateTree(2, 3);
    const divs = tree.querySelectorAll('.item_2');
    for (let elem of divs) {
        const section = document.createElement('section');
        section.innerHTML = elem.innerHTML;
        section.className = elem.className;
        tree.replaceChild(section, elem);
    }
    return tree;
}

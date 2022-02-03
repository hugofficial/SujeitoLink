// Buscar os links salvo.
export async function getLinkSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Salvar um link no localStorage.
export async function saveLinks(key, newLink) {
  let linksStored = await getLinkSave(key);

  // Sa já tiver um link salvo com algum ID eu não vou deixar duplicar
  const haslink = linksStored.some((link) => link.id === newLink.id);

  if (haslink) {
    console.log("ESSE LINK JÁ EXISTE NA SUA LISTA");
    return;
  }

  //Adicionar esse novo link na lista de
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("LINK SALVO COM SUCESSO");
}

// Deletar algum link salvo.

export function deleteLink(link, id) {
  let myLinks = link.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));
  console.log("LINK DELETADO COM SUCESSO!");

  return myLinks;
}

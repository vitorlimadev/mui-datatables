/*
 * Default text labels.
 */
const getTextLabels = () => ({
  body: {
    noMatch: 'Nenhum registro encontrado.',
    toolTip: 'Ordenar',
  },
  pagination: {
    next: 'Próximo',
    previous: 'Anterior',
    rowsPerPage: 'Linhas por página:',
    displayRows: 'de',
    jumpToPage: 'Ir para a página:',
  },
  toolbar: {
    search: 'Pesquisar',
    downloadCsv: 'Baixar como planilha',
    print: 'Imprimir',
    viewColumns: 'Ver colunas',
    filterTable: 'Filtrar tabela',
  },
  filter: {
    all: 'Todos',
    title: 'FILTROS',
    reset: 'REINICIAR',
  },
  viewColumns: {
    title: 'Mostrar colunas',
    titleAria: 'Esconder/mostrar colunas',
  },
  selectedRows: {
    text: 'linha(s) selecionada(s)',
    delete: 'Deletar',
    deleteAria: 'Deletar linhas selecionadas',
  },
});

export default getTextLabels;

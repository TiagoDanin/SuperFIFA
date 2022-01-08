const verifyTypeAction = (action, description) => {
  const typesAction = {
    list: 'Não foi possível realizar a listagem, tente mais tarde.',
    get: `Não foi possível realizar a consulta de ${description}, tente mais tarde.`,
    create: 'Não foi possível realizar o cadastro, tente mais tarde.',
    update: 'Não foi possível realizar a edição, tente mais tarde.',
    remove: 'Não foi possível realizar a exclusão, tente mais tarde.',
    report:
      'Não foi possível realizar a geração do relatório, verifique sua consulta e tente novamente.',
    login: 'Não foi possível realizar o login, tente mais tarde.',
    default: 'Não foi possível realizar a operação',
    put: `Não foi possível atualizar o ${description}, tente mais tarde.`,
  };
  return typesAction[action] || typesAction.default;
};

const verifyStatusResponse = (response, type, description) => {
  const statusHttp = {
    400: () => verifyTypeAction(type, description),
    401: () => 'Sessão expirada. Logue-se novamente',
    404: () => 'Endereço de acesso não encontrado',
    500: () => verifyTypeAction(type, description),
    503: () => 'Servidor indisponível. Tente novamente mais tarde',
    default: () => 'Erro de verificação do status da requisição',
  };
  return (statusHttp[response.status] || statusHttp.default)();
};

const responseService = (object, type, description) => {
  const {response} = object;
  return !response
    ? new Error('Servidor indisponível, tente mais tarde!')
    : new Error(verifyStatusResponse(response, type, description));
};

export default responseService;

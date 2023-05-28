export type TypeValidate = 'keyword' | 'email';

const validate = (value: any, type?: TypeValidate) => {
  if (type === 'email') {
    const emailReg = new RegExp('^([0-9a-zA-Z_+\\.-]+)@([0-9a-zA-Z_-]+)(\\.[0-9a-zA-Z_-]+){1,2}$');
    return emailReg.test(value);
  }
  return true;
};

export default validate;

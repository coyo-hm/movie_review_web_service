export type TypeValidate = 'keyword' | 'email';

// eslint-disable-next-line
const validate = (value: any, type?: TypeValidate) => {
  if (type === 'email') {
    const emailReg = new RegExp('^([0-9a-zA-Z_+\\.-]+)@([0-9a-zA-Z_-]+)(\\.[0-9a-zA-Z_-]+){1,2}$');
    return value ? emailReg.test(value) : true;
  }
  return true;
};

export default validate;

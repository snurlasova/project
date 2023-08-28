const validator = new JustValidate('#form');

validator.addField('#userName', [

  {
    rule: 'required',
  },

  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 10,
  },

]);

validator.addField('#userPhone', [
  {
    rule: 'required',
  },

  {
    rule: 'minLength',
    value: 10,
  },

  {
    rule: 'maxLength',
    value: 15,
  },

]);

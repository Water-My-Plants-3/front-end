import * as yup from "yup"
export function equalTo(ref: any, msg: any) {
    return yup.mixed().test({
      name: 'equalTo',
      exclusive: false,
      message: msg || '${path} must be the same as ${reference}',
      params: {
        reference: ref.path,
      },
      test: function(value) {
        return value === this.resolve(ref);
      },
    });
  }
  yup.addMethod(yup.string, 'equalTo', equalTo);


  export const signUpFormSchema = yup.object().shape({
    username: yup.string()
    .trim()
    .min(3, 'Username too short (min 3 char)')
    .required('Username is required'),
    password: yup.string()
    .trim()
    .min(5)
    .required('Required'),
    rePassword: yup.string()
    .trim()
    .min(5)
    .equalTo(yup.ref('password'), 'Passwords must match')
    .required('Required'),
    phone: yup.number()
    .integer()
    .positive()
    .moreThan(999999999)
    .lessThan(100000000000)

})

export const loginFormSchema = yup.object().shape({
    username: yup.string(),
    password: yup.string()
    .min(5),
})
// export const signUpFormSchema = yup.object().shape({
//     username: yup.string(),
//     password: yup.string(),
//     rePassword: yup.string(),
//     phone: yup.number()

// })
const usersSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        email: { type: 'string', format:"email"},
        password: { type: 'string', minLength: 1},
    },
    additionalProperties: true,
    required: [ 'email', 'password',],
};

export default usersSchema;
  
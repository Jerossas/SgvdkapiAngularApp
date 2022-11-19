export class SignUpRequest {
    constructor(
        public name?: string,
        public lastname?: string,
        public phone?: string,
        public email?: string,
        public password?: string
    ){}
}
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async signupShow({view}: HttpContextContract) {
        return view.render('pages/auth/signup');

    }
}

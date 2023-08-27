
import connectDatabase from '@/database'
import User from '@/models/user'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GoogleProvider_Client_Id,
            clientSecret:process.env.GoogleProvider_Client_Secret
        })

    ],
    callbacks: {
        async signIn({user, account}) {
            if (account.provider === 'google'){
                const {name, email} = user

                try{
                    await connectDatabase()
                    const isUserExists = await User.findOne({email})

                    if(!isUserExists){
                        const res = await fetch('http://localhost:3000/api/user', {
                            method:'POST',
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({name, email})
                        })
                        if(res.user){
                            return user;
                        }
                    }
                }
                catch(err){
                    console.log(err)
                }
            }
            return user;
        }
    }
}

const handler = NextAuth(authOptions) 

export {handler as GET, handler as POST};
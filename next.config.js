/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_URI_DEV:"mongodb://localhost:27017/NextJs_MongoDB_Dashboard",
        GoogleProvider_Client_Id:'615095495389-hoi6pbsialp3ps439h2vbln0kikfqemq.apps.googleusercontent.com',
        GoogleProvider_Client_Secret:'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'
    }
}

module.exports = nextConfig

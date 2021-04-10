import Head from 'next/head';

export default function Header() {
    return (
        <>
            <Head>
                <meta http-equiv="Content-Language" content="pt-br" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="url" content="www.diegokoscky.com.br" />
                <meta name="robots" content="index, follow" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Diego Koscky Marketing Digital e Web" />
                <meta name="theme-color" content="#409EC2" />
                <meta name="description" content="Sou web designer freelancer em BH, especializado na criação de sites, soluções web personalizadas e estratatégias de marketing digital para alavancar seu negócio!" />
                <meta name="language" content="pt-br" />
                <meta name="company" content="Diego Koscky Marketing Digital e Web" />
                <meta name="author" content="Diego Koscky" />
                <meta name="revisit-after" content="1" />
                <meta name="geo.region" content="BR-MG" />
                <meta name="geo.placename" content="Belo Horizonte" />
                <meta name="geo.position" content="-19.9334392;-44.0125944" />
                <meta name="ICBM" content="-19.9334392,-44.0125944" />
                <meta name="msvalidate.01" content="0B2816220970EA02CE6C01DE605CD61C" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="diegokoscky.com.br" />
                <meta property="og:url" content="www.diegokoscky.com.br" />
                <meta property="og:title" content="Diego Koscky - Web Designer Freelancer BH | Marketing Digital" />
                <meta property="og:description" content="Sou web designer freelancer em BH, especializado na criação de sites, soluções web personalizadas e estratatégias de marketing digital para alavancar seu negócio!" />
                <meta property="fb:pages" content="415603735288843" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:title" content="Diego Koscky - Web Designer Freelancer BH | Marketing Digital" />
                <meta property="twitter:description" content="Sou web designer freelancer em BH, especializado na criação de sites, soluções web personalizadas e estratatégias de marketing digital para alavancar seu negócio!" />   
                <title>Diego Koscky - Web Designer Freelancer BH | Marketing Digital</title>
                <link rel="icon" href="/imgs/favicon.ico" />
                <link rel="canonical" href="https://www.diegokoscky.com.br" />
                <script type="application/ld+json" 
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        "url": "http://diegokoscky.com.br",
                        "logo": "http://diegokoscky.com.br/imgs/externos/diegokoscky.jpg",
                        "name": "Diego Koscky - Web Designer Freelancer BH | Marketing Digital",
                        "description": "Sou web designer freelancer em BH, especializado na criação de sites, soluções web personalizadas e estratatégias de marketing digital para alavancar seu negócio!",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+55-31-98717-9432",
                            "contactType": "Customer service"
                        }
                    })}}
                />
            </Head>
        </>
    )
}

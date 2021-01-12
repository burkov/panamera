
export interface Prefix {
  tomcat: string;
  lservice: string;
  allapps: string;
}

export const envPrefixes: Prefix[] = [
  {
    tomcat: '/jetprofile-dev1/',
    lservice: '/jetprofile/dev1/lservice',
    allapps: '/jetprofile/dev1/allapps',
  },
  {
    tomcat: '/jetprofile-dev2/',
    lservice: '/jetprofile/dev2/lservice',
    allapps: '/jetprofile/dev2/allapps',
  },
  {
    tomcat: '/jetprofile-dev3/',
    lservice: '/jetprofile/dev3/lservice',
    allapps: '/jetprofile/dev3/allapps',
  },
  {
    tomcat: '/jetprofile-dev4/',
    lservice: '/jetprofile/dev4/lservice',
    allapps: '/jetprofile/dev4/allapps',
  },
  {
    tomcat: '/jetprofile-dev5/',
    lservice: '/jetprofile/dev5/lservice',
    allapps: '/jetprofile/dev5/allapps',
  },
  {
    tomcat: '/jetprofile-audt/',
    lservice: '/jetprofile/audt/lservice',
    allapps: '/jetprofile/audt/allapps',
  },
  {
    tomcat: '/jetprofile-stgn/',
    lservice: '/jetprofile/stgn/blue/lservice',
    allapps: '/jetprofile/stgn/blue/allapps',
  },
  {
    tomcat: '/jetprofile-stgn/',
    lservice: '/jetprofile/stgn/green/lservice',
    allapps: '/jetprofile/stgn/green/allapps',
  },
];

Socket {
    nsp: Namespace {
        name: '/',
        server: Server {
            nsps: [Object],
            _path: '/socket.io',
            _serveClient: true,
            _adapter: [Function: Adapter],
            _origins: '*:*',
            sockets: [Circular],
            eio: [Object],
            httpServer: [Object],
            engine: [Object]
        },
        sockets: {
            '/#eWYz1KQIeMd6Aar9AAAA': [Circular]
        },
        connected: {
            '/#eWYz1KQIeMd6Aar9AAAA': [Circular]
        },
        fns: [[Function]],
        ids: 0,
        adapter: Adapter {
            nsp: [Circular],
            rooms: [Object],
            sids: [Object],
            encoder: Encoder {}
        },
        _events: {
            connection: [Function]
        },
        _eventsCount: 1
    },
    server: Server {
        nsps: {
            '/': [Object]
        },
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: Namespace {
            name: '/',
            server: [Circular],
            sockets: [Object],
            connected: [Object],
            fns: [Object],
            ids: 0,
            adapter: [Object],
            _events: [Object],
            _eventsCount: 1
        },
        eio: Server {
            clients: [Object],
            clientsCount: 1,
            pingTimeout: 60000,
            pingInterval: 25000,
            upgradeTimeout: 10000,
            maxHttpBufferSize: 100000000,
            transports: [Object],
            allowUpgrades: true,
            allowRequest: [Function: bound],
            cookie: 'io',
            cookiePath: false,
            perMessageDeflate: [Object],
            httpCompression: [Object],
            ws: [Object],
            _events: [Object],
            _eventsCount: 1
        },
        httpServer: Server {
            domain: null,
            _events: [Object],
            _eventsCount: 5,
            _maxListeners: undefined,
            _connections: 1,
            _handle: [Object],
            _usingSlaves: false,
            _slaves: [],
            _unref: false,
            allowHalfOpen: true,
            pauseOnConnect: false,
            httpAllowHalfOpen: false,
            timeout: 120000,
            _pendingResponseData: 0,
            _connectionKey: '6::::8101'
        },
        engine: Server {
            clients: [Object],
            clientsCount: 1,
            pingTimeout: 60000,
            pingInterval: 25000,
            upgradeTimeout: 10000,
            maxHttpBufferSize: 100000000,
            transports: [Object],
            allowUpgrades: true,
            allowRequest: [Function: bound],
            cookie: 'io',
            cookiePath: false,
            perMessageDeflate: [Object],
            httpCompression: [Object],
            ws: [Object],
            _events: [Object],
            _eventsCount: 1
        }
    },
    adapter: Adapter {
        nsp: Namespace {
            name: '/',
            server: [Object],
            sockets: [Object],
            connected: [Object],
            fns: [Object],
            ids: 0,
            adapter: [Circular],
            _events: [Object],
            _eventsCount: 1
        },
        rooms: {
            '/#eWYz1KQIeMd6Aar9AAAA': [Object]
        },
        sids: {
            '/#eWYz1KQIeMd6Aar9AAAA': [Object]
        },
        encoder: Encoder {}
    },
    id: '/#eWYz1KQIeMd6Aar9AAAA',
    client: Client {
        server: Server {
            nsps: [Object],
            _path: '/socket.io',
            _serveClient: true,
            _adapter: [Function: Adapter],
            _origins: '*:*',
            sockets: [Object],
            eio: [Object],
            httpServer: [Object],
            engine: [Object]
        },
        conn: Socket {
            id: 'eWYz1KQIeMd6Aar9AAAA',
            server: [Object],
            upgrading: false,
            upgraded: false,
            readyState: 'open',
            writeBuffer: [Object],
            packetsFn: [Object],
            sentCallbackFn: [],
            cleanupFn: [Object],
            request: [Object],
            remoteAddress: '::ffff:127.0.0.1',
            checkIntervalTimer: null,
            upgradeTimeoutTimer: null,
            pingTimeoutTimer: [Object],
            transport: [Object],
            _events: [Object],
            _eventsCount: 3
        },
        encoder: Encoder {},
        decoder: Decoder {
            reconstructor: null,
            _callbacks: [Object]
        },
        id: 'eWYz1KQIeMd6Aar9AAAA',
        request: IncomingMessage {
            _readableState: [Object],
            readable: true,
            domain: null,
            _events: {},
            _eventsCount: 0,
            _maxListeners: undefined,
            socket: [Object],
            connection: [Object],
            httpVersionMajor: 1,
            httpVersionMinor: 1,
            httpVersion: '1.1',
            complete: true,
            headers: [Object],
            rawHeaders: [Object],
            trailers: {},
            rawTrailers: [],
            upgrade: false,
            url: '/socket.io/?EIO=3&transport=polling&t=LBzw8nP',
            method: 'GET',
            statusCode: null,
            statusMessage: null,
            client: [Object],
            _consuming: false,
            _dumped: true,
            _query: [Object],
            res: [Object],
            cleanup: [Function: cleanup]
        },
        onclose: [Function: bound],
        ondata: [Function: bound],
        onerror: [Function: bound],
        ondecoded: [Function: bound],
        sockets: {
            '/#eWYz1KQIeMd6Aar9AAAA': [Circular]
        },
        nsps: {
            '/': [Circular]
        },
        connectBuffer: []
    },
    conn: Socket {
        id: 'eWYz1KQIeMd6Aar9AAAA',
        server: Server {
            clients: [Object],
            clientsCount: 1,
            pingTimeout: 60000,
            pingInterval: 25000,
            upgradeTimeout: 10000,
            maxHttpBufferSize: 100000000,
            transports: [Object],
            allowUpgrades: true,
            allowRequest: [Function: bound],
            cookie: 'io',
            cookiePath: false,
            perMessageDeflate: [Object],
            httpCompression: [Object],
            ws: [Object],
            _events: [Object],
            _eventsCount: 1
        },
        upgrading: false,
        upgraded: false,
        readyState: 'open',
        writeBuffer: [[Object]],
        packetsFn: [undefined],
        sentCallbackFn: [],
        cleanupFn: [[Function], [Function]],
        request: IncomingMessage {
            _readableState: [Object],
            readable: true,
            domain: null,
            _events: {},
            _eventsCount: 0,
            _maxListeners: undefined,
            socket: [Object],
            connection: [Object],
            httpVersionMajor: 1,
            httpVersionMinor: 1,
            httpVersion: '1.1',
            complete: true,
            headers: [Object],
            rawHeaders: [Object],
            trailers: {},
            rawTrailers: [],
            upgrade: false,
            url: '/socket.io/?EIO=3&transport=polling&t=LBzw8nP',
            method: 'GET',
            statusCode: null,
            statusMessage: null,
            client: [Object],
            _consuming: false,
            _dumped: true,
            _query: [Object],
            res: [Object],
            cleanup: [Function: cleanup]
        },
        remoteAddress: '::ffff:127.0.0.1',
        checkIntervalTimer: null,
        upgradeTimeoutTimer: null,
        pingTimeoutTimer: {
            _called: false,
            _idleTimeout: 85000,
            _idlePrev: [Object],
            _idleNext: [Object],
            _idleStart: 2735,
            _onTimeout: [Function],
            _repeat: null
        },
        transport: XHR {
            readyState: 'open',
            discarded: false,
            closeTimeout: 30000,
            maxHttpBufferSize: 100000000,
            httpCompression: [Object],
            supportsBinary: true,
            _events: [Object],
            _eventsCount: 5,
            sid: 'eWYz1KQIeMd6Aar9AAAA',
            req: null,
            res: null,
            writable: false
        },
        _events: {
            close: [Object],
            data: [Function: bound],
            error: [Function: bound]
        },
        _eventsCount: 3
    },
    rooms: {},
    acks: {},
    connected: true,
    disconnected: false,
    handshake: {
        headers: {
            host: 'localhost:8101',
            connection: 'keep-alive',
            pragma: 'no-cache',
            'cache-control': 'no-cache',
            origin: 'http://localhost:8100',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (                                                                                                                KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36',
            accept: '*/*',
            referer: 'http://localhost:8100/',
            'accept-encoding': 'gzip, deflate, sdch',
            'accept-language': 'en-US,en;q=0.8',
            cookie: 'io=ylekCvgYkjIVVDOnAAAA'
        },
        time: 'Sat Feb 20 2016 14:30:22 GMT+0530 (India Standard Time)',
        address: '::ffff:127.0.0.1',
        xdomain: true,
        secure: false,
        issued: 1455958822856,
        url: '/socket.io/?EIO=3&transport=polling&t=LBzw8nP',
        query: {
            EIO: '3',
            transport: 'polling',
            t: 'LBzw8nP'
        },
        secret: undefined,
        cookies: {
            io: 'ylekCvgYkjIVVDOnAAAA'
        },
        signedCookies: {},
        _parsedUrl: Url {
            protocol: null,
            slashes: null,
            auth: null,
            host: null,
            port: null,
            hostname: null,
            hash: null,
            search: '?EIO=3&transport=polling&t=LBzw8nP',
            query: 'EIO=3&transport=polling&t=LBzw8nP',
            pathname: '/socket.io/',
            path: '/socket.io/?EIO=3&transport=polling&t=LBzw8nP',
            href: '/socket.io/?EIO=3&transport=polling&t=LBzw8nP',
            _raw: '/socket.io/?EIO=3&transport=polling&t=LBzw8nP'
        },
        sessionStore: MongoStore {
            ttl: 1209600,
            collectionName: 'sessions',
            autoRemove: 'native',
            autoRemoveInterval: 10,
            transformFunctions: [Object],
            options: [Object],
            state: 'connected',
            generate: [Function],
            _events: [Object],
            _eventsCount: 2,
            db: [Object],
            collectionReadyPromise: undefined,
            collection: [Object]
        },
        sessionID: '_UWdARMApQ_dFqAFncArWD2faFKEGq-c',
        session: Session {
            cookie: [Object]
        }
    }
}
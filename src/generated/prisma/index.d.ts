
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Court
 * 
 */
export type Court = $Result.DefaultSelection<Prisma.$CourtPayload>
/**
 * Model CourtStaff
 * 
 */
export type CourtStaff = $Result.DefaultSelection<Prisma.$CourtStaffPayload>
/**
 * Model DocumentList
 * 
 */
export type DocumentList = $Result.DefaultSelection<Prisma.$DocumentListPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DocumentStatus: {
  PENDING: 'PENDING',
  PROCESSED: 'PROCESSED',
  FINISHED: 'FINISHED',
  FAILED: 'FAILED'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.court`: Exposes CRUD operations for the **Court** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courts
    * const courts = await prisma.court.findMany()
    * ```
    */
  get court(): Prisma.CourtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courtStaff`: Exposes CRUD operations for the **CourtStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourtStaffs
    * const courtStaffs = await prisma.courtStaff.findMany()
    * ```
    */
  get courtStaff(): Prisma.CourtStaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentList`: Exposes CRUD operations for the **DocumentList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentLists
    * const documentLists = await prisma.documentList.findMany()
    * ```
    */
  get documentList(): Prisma.DocumentListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Court: 'Court',
    CourtStaff: 'CourtStaff',
    DocumentList: 'DocumentList',
    Document: 'Document',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "court" | "courtStaff" | "documentList" | "document" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Court: {
        payload: Prisma.$CourtPayload<ExtArgs>
        fields: Prisma.CourtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          findFirst: {
            args: Prisma.CourtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          findMany: {
            args: Prisma.CourtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>[]
          }
          create: {
            args: Prisma.CourtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          createMany: {
            args: Prisma.CourtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          update: {
            args: Prisma.CourtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          deleteMany: {
            args: Prisma.CourtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          aggregate: {
            args: Prisma.CourtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourt>
          }
          groupBy: {
            args: Prisma.CourtGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourtGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourtCountArgs<ExtArgs>
            result: $Utils.Optional<CourtCountAggregateOutputType> | number
          }
        }
      }
      CourtStaff: {
        payload: Prisma.$CourtStaffPayload<ExtArgs>
        fields: Prisma.CourtStaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourtStaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourtStaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload>
          }
          findFirst: {
            args: Prisma.CourtStaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourtStaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload>
          }
          findMany: {
            args: Prisma.CourtStaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload>[]
          }
          create: {
            args: Prisma.CourtStaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload>
          }
          createMany: {
            args: Prisma.CourtStaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourtStaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload>
          }
          update: {
            args: Prisma.CourtStaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload>
          }
          deleteMany: {
            args: Prisma.CourtStaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourtStaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourtStaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtStaffPayload>
          }
          aggregate: {
            args: Prisma.CourtStaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourtStaff>
          }
          groupBy: {
            args: Prisma.CourtStaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourtStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourtStaffCountArgs<ExtArgs>
            result: $Utils.Optional<CourtStaffCountAggregateOutputType> | number
          }
        }
      }
      DocumentList: {
        payload: Prisma.$DocumentListPayload<ExtArgs>
        fields: Prisma.DocumentListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload>
          }
          findFirst: {
            args: Prisma.DocumentListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload>
          }
          findMany: {
            args: Prisma.DocumentListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload>[]
          }
          create: {
            args: Prisma.DocumentListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload>
          }
          createMany: {
            args: Prisma.DocumentListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload>
          }
          update: {
            args: Prisma.DocumentListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload>
          }
          deleteMany: {
            args: Prisma.DocumentListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentListPayload>
          }
          aggregate: {
            args: Prisma.DocumentListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentList>
          }
          groupBy: {
            args: Prisma.DocumentListGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentListGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentListCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentListCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    court?: CourtOmit
    courtStaff?: CourtStaffOmit
    documentList?: DocumentListOmit
    document?: DocumentOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    notifications: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | AccountCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CourtCountOutputType
   */

  export type CourtCountOutputType = {
    staff: number
    documentList: number
    document: number
  }

  export type CourtCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | CourtCountOutputTypeCountStaffArgs
    documentList?: boolean | CourtCountOutputTypeCountDocumentListArgs
    document?: boolean | CourtCountOutputTypeCountDocumentArgs
  }

  // Custom InputTypes
  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtCountOutputType
     */
    select?: CourtCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtStaffWhereInput
  }

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountDocumentListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentListWhereInput
  }

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type CourtStaffCountOutputType
   */

  export type CourtStaffCountOutputType = {
    document: number
  }

  export type CourtStaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | CourtStaffCountOutputTypeCountDocumentArgs
  }

  // Custom InputTypes
  /**
   * CourtStaffCountOutputType without action
   */
  export type CourtStaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaffCountOutputType
     */
    select?: CourtStaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourtStaffCountOutputType without action
   */
  export type CourtStaffCountOutputTypeCountDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    avatar: string | null
    role: $Enums.Role | null
    courtStaffId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    avatar: string | null
    role: $Enums.Role | null
    courtStaffId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    avatar: number
    role: number
    courtStaffId: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    avatar?: true
    role?: true
    courtStaffId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    avatar?: true
    role?: true
    courtStaffId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    avatar?: true
    role?: true
    courtStaffId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    avatar: string | null
    role: $Enums.Role
    courtStaffId: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    avatar?: boolean
    role?: boolean
    courtStaffId?: boolean
    courtStaff?: boolean | Account$courtStaffArgs<ExtArgs>
    notifications?: boolean | Account$notificationsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    avatar?: boolean
    role?: boolean
    courtStaffId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "avatar" | "role" | "courtStaffId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courtStaff?: boolean | Account$courtStaffArgs<ExtArgs>
    notifications?: boolean | Account$notificationsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      courtStaff: Prisma.$CourtStaffPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      avatar: string | null
      role: $Enums.Role
      courtStaffId: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courtStaff<T extends Account$courtStaffArgs<ExtArgs> = {}>(args?: Subset<T, Account$courtStaffArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Account$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Account$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly avatar: FieldRef<"Account", 'String'>
    readonly role: FieldRef<"Account", 'Role'>
    readonly courtStaffId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.courtStaff
   */
  export type Account$courtStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    where?: CourtStaffWhereInput
  }

  /**
   * Account.notifications
   */
  export type Account$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Court
   */

  export type AggregateCourt = {
    _count: CourtCountAggregateOutputType | null
    _avg: CourtAvgAggregateOutputType | null
    _sum: CourtSumAggregateOutputType | null
    _min: CourtMinAggregateOutputType | null
    _max: CourtMaxAggregateOutputType | null
  }

  export type CourtAvgAggregateOutputType = {
    courtNumber: number | null
  }

  export type CourtSumAggregateOutputType = {
    courtNumber: number | null
  }

  export type CourtMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    courtNumber: number | null
    isDeleted: boolean | null
  }

  export type CourtMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    courtNumber: number | null
    isDeleted: boolean | null
  }

  export type CourtCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    email: number
    courtNumber: number
    isDeleted: number
    _all: number
  }


  export type CourtAvgAggregateInputType = {
    courtNumber?: true
  }

  export type CourtSumAggregateInputType = {
    courtNumber?: true
  }

  export type CourtMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    courtNumber?: true
    isDeleted?: true
  }

  export type CourtMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    courtNumber?: true
    isDeleted?: true
  }

  export type CourtCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    courtNumber?: true
    isDeleted?: true
    _all?: true
  }

  export type CourtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Court to aggregate.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courts
    **/
    _count?: true | CourtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourtMaxAggregateInputType
  }

  export type GetCourtAggregateType<T extends CourtAggregateArgs> = {
        [P in keyof T & keyof AggregateCourt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourt[P]>
      : GetScalarType<T[P], AggregateCourt[P]>
  }




  export type CourtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtWhereInput
    orderBy?: CourtOrderByWithAggregationInput | CourtOrderByWithAggregationInput[]
    by: CourtScalarFieldEnum[] | CourtScalarFieldEnum
    having?: CourtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourtCountAggregateInputType | true
    _avg?: CourtAvgAggregateInputType
    _sum?: CourtSumAggregateInputType
    _min?: CourtMinAggregateInputType
    _max?: CourtMaxAggregateInputType
  }

  export type CourtGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string | null
    email: string | null
    courtNumber: number
    isDeleted: boolean
    _count: CourtCountAggregateOutputType | null
    _avg: CourtAvgAggregateOutputType | null
    _sum: CourtSumAggregateOutputType | null
    _min: CourtMinAggregateOutputType | null
    _max: CourtMaxAggregateOutputType | null
  }

  type GetCourtGroupByPayload<T extends CourtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtGroupByOutputType[P]>
            : GetScalarType<T[P], CourtGroupByOutputType[P]>
        }
      >
    >


  export type CourtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    courtNumber?: boolean
    isDeleted?: boolean
    staff?: boolean | Court$staffArgs<ExtArgs>
    documentList?: boolean | Court$documentListArgs<ExtArgs>
    document?: boolean | Court$documentArgs<ExtArgs>
    _count?: boolean | CourtCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["court"]>



  export type CourtSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    courtNumber?: boolean
    isDeleted?: boolean
  }

  export type CourtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "email" | "courtNumber" | "isDeleted", ExtArgs["result"]["court"]>
  export type CourtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | Court$staffArgs<ExtArgs>
    documentList?: boolean | Court$documentListArgs<ExtArgs>
    document?: boolean | Court$documentArgs<ExtArgs>
    _count?: boolean | CourtCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CourtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Court"
    objects: {
      staff: Prisma.$CourtStaffPayload<ExtArgs>[]
      documentList: Prisma.$DocumentListPayload<ExtArgs>[]
      document: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string | null
      email: string | null
      courtNumber: number
      isDeleted: boolean
    }, ExtArgs["result"]["court"]>
    composites: {}
  }

  type CourtGetPayload<S extends boolean | null | undefined | CourtDefaultArgs> = $Result.GetResult<Prisma.$CourtPayload, S>

  type CourtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourtCountAggregateInputType | true
    }

  export interface CourtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Court'], meta: { name: 'Court' } }
    /**
     * Find zero or one Court that matches the filter.
     * @param {CourtFindUniqueArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourtFindUniqueArgs>(args: SelectSubset<T, CourtFindUniqueArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Court that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourtFindUniqueOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourtFindUniqueOrThrowArgs>(args: SelectSubset<T, CourtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Court that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourtFindFirstArgs>(args?: SelectSubset<T, CourtFindFirstArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Court that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourtFindFirstOrThrowArgs>(args?: SelectSubset<T, CourtFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courts
     * const courts = await prisma.court.findMany()
     * 
     * // Get first 10 Courts
     * const courts = await prisma.court.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courtWithIdOnly = await prisma.court.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourtFindManyArgs>(args?: SelectSubset<T, CourtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Court.
     * @param {CourtCreateArgs} args - Arguments to create a Court.
     * @example
     * // Create one Court
     * const Court = await prisma.court.create({
     *   data: {
     *     // ... data to create a Court
     *   }
     * })
     * 
     */
    create<T extends CourtCreateArgs>(args: SelectSubset<T, CourtCreateArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courts.
     * @param {CourtCreateManyArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const court = await prisma.court.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourtCreateManyArgs>(args?: SelectSubset<T, CourtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Court.
     * @param {CourtDeleteArgs} args - Arguments to delete one Court.
     * @example
     * // Delete one Court
     * const Court = await prisma.court.delete({
     *   where: {
     *     // ... filter to delete one Court
     *   }
     * })
     * 
     */
    delete<T extends CourtDeleteArgs>(args: SelectSubset<T, CourtDeleteArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Court.
     * @param {CourtUpdateArgs} args - Arguments to update one Court.
     * @example
     * // Update one Court
     * const court = await prisma.court.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourtUpdateArgs>(args: SelectSubset<T, CourtUpdateArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courts.
     * @param {CourtDeleteManyArgs} args - Arguments to filter Courts to delete.
     * @example
     * // Delete a few Courts
     * const { count } = await prisma.court.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourtDeleteManyArgs>(args?: SelectSubset<T, CourtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courts
     * const court = await prisma.court.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourtUpdateManyArgs>(args: SelectSubset<T, CourtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Court.
     * @param {CourtUpsertArgs} args - Arguments to update or create a Court.
     * @example
     * // Update or create a Court
     * const court = await prisma.court.upsert({
     *   create: {
     *     // ... data to create a Court
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Court we want to update
     *   }
     * })
     */
    upsert<T extends CourtUpsertArgs>(args: SelectSubset<T, CourtUpsertArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtCountArgs} args - Arguments to filter Courts to count.
     * @example
     * // Count the number of Courts
     * const count = await prisma.court.count({
     *   where: {
     *     // ... the filter for the Courts we want to count
     *   }
     * })
    **/
    count<T extends CourtCountArgs>(
      args?: Subset<T, CourtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourtAggregateArgs>(args: Subset<T, CourtAggregateArgs>): Prisma.PrismaPromise<GetCourtAggregateType<T>>

    /**
     * Group by Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtGroupByArgs['orderBy'] }
        : { orderBy?: CourtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Court model
   */
  readonly fields: CourtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Court.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends Court$staffArgs<ExtArgs> = {}>(args?: Subset<T, Court$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentList<T extends Court$documentListArgs<ExtArgs> = {}>(args?: Subset<T, Court$documentListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    document<T extends Court$documentArgs<ExtArgs> = {}>(args?: Subset<T, Court$documentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Court model
   */
  interface CourtFieldRefs {
    readonly id: FieldRef<"Court", 'String'>
    readonly name: FieldRef<"Court", 'String'>
    readonly address: FieldRef<"Court", 'String'>
    readonly phone: FieldRef<"Court", 'String'>
    readonly email: FieldRef<"Court", 'String'>
    readonly courtNumber: FieldRef<"Court", 'Int'>
    readonly isDeleted: FieldRef<"Court", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Court findUnique
   */
  export type CourtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court findUniqueOrThrow
   */
  export type CourtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court findFirst
   */
  export type CourtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court findFirstOrThrow
   */
  export type CourtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court findMany
   */
  export type CourtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court create
   */
  export type CourtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The data needed to create a Court.
     */
    data: XOR<CourtCreateInput, CourtUncheckedCreateInput>
  }

  /**
   * Court createMany
   */
  export type CourtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courts.
     */
    data: CourtCreateManyInput | CourtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Court update
   */
  export type CourtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The data needed to update a Court.
     */
    data: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>
    /**
     * Choose, which Court to update.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court updateMany
   */
  export type CourtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtUpdateManyMutationInput, CourtUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
  }

  /**
   * Court upsert
   */
  export type CourtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The filter to search for the Court to update in case it exists.
     */
    where: CourtWhereUniqueInput
    /**
     * In case the Court found by the `where` argument doesn't exist, create a new Court with this data.
     */
    create: XOR<CourtCreateInput, CourtUncheckedCreateInput>
    /**
     * In case the Court was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>
  }

  /**
   * Court delete
   */
  export type CourtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter which Court to delete.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court deleteMany
   */
  export type CourtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courts to delete
     */
    where?: CourtWhereInput
    /**
     * Limit how many Courts to delete.
     */
    limit?: number
  }

  /**
   * Court.staff
   */
  export type Court$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    where?: CourtStaffWhereInput
    orderBy?: CourtStaffOrderByWithRelationInput | CourtStaffOrderByWithRelationInput[]
    cursor?: CourtStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourtStaffScalarFieldEnum | CourtStaffScalarFieldEnum[]
  }

  /**
   * Court.documentList
   */
  export type Court$documentListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    where?: DocumentListWhereInput
    orderBy?: DocumentListOrderByWithRelationInput | DocumentListOrderByWithRelationInput[]
    cursor?: DocumentListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentListScalarFieldEnum | DocumentListScalarFieldEnum[]
  }

  /**
   * Court.document
   */
  export type Court$documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Court without action
   */
  export type CourtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
  }


  /**
   * Model CourtStaff
   */

  export type AggregateCourtStaff = {
    _count: CourtStaffCountAggregateOutputType | null
    _min: CourtStaffMinAggregateOutputType | null
    _max: CourtStaffMaxAggregateOutputType | null
  }

  export type CourtStaffMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    avatar: string | null
    socialId: string | null
    email: string | null
    operatingArea: string | null
    isDeleted: boolean | null
    courtId: string | null
  }

  export type CourtStaffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    avatar: string | null
    socialId: string | null
    email: string | null
    operatingArea: string | null
    isDeleted: boolean | null
    courtId: string | null
  }

  export type CourtStaffCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    avatar: number
    socialId: number
    email: number
    operatingArea: number
    isDeleted: number
    courtId: number
    _all: number
  }


  export type CourtStaffMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    avatar?: true
    socialId?: true
    email?: true
    operatingArea?: true
    isDeleted?: true
    courtId?: true
  }

  export type CourtStaffMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    avatar?: true
    socialId?: true
    email?: true
    operatingArea?: true
    isDeleted?: true
    courtId?: true
  }

  export type CourtStaffCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    avatar?: true
    socialId?: true
    email?: true
    operatingArea?: true
    isDeleted?: true
    courtId?: true
    _all?: true
  }

  export type CourtStaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourtStaff to aggregate.
     */
    where?: CourtStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourtStaffs to fetch.
     */
    orderBy?: CourtStaffOrderByWithRelationInput | CourtStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourtStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourtStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourtStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourtStaffs
    **/
    _count?: true | CourtStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourtStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourtStaffMaxAggregateInputType
  }

  export type GetCourtStaffAggregateType<T extends CourtStaffAggregateArgs> = {
        [P in keyof T & keyof AggregateCourtStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourtStaff[P]>
      : GetScalarType<T[P], AggregateCourtStaff[P]>
  }




  export type CourtStaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtStaffWhereInput
    orderBy?: CourtStaffOrderByWithAggregationInput | CourtStaffOrderByWithAggregationInput[]
    by: CourtStaffScalarFieldEnum[] | CourtStaffScalarFieldEnum
    having?: CourtStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourtStaffCountAggregateInputType | true
    _min?: CourtStaffMinAggregateInputType
    _max?: CourtStaffMaxAggregateInputType
  }

  export type CourtStaffGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    avatar: string | null
    socialId: string | null
    email: string | null
    operatingArea: string | null
    isDeleted: boolean
    courtId: string
    _count: CourtStaffCountAggregateOutputType | null
    _min: CourtStaffMinAggregateOutputType | null
    _max: CourtStaffMaxAggregateOutputType | null
  }

  type GetCourtStaffGroupByPayload<T extends CourtStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourtStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourtStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtStaffGroupByOutputType[P]>
            : GetScalarType<T[P], CourtStaffGroupByOutputType[P]>
        }
      >
    >


  export type CourtStaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    avatar?: boolean
    socialId?: boolean
    email?: boolean
    operatingArea?: boolean
    isDeleted?: boolean
    courtId?: boolean
    account?: boolean | CourtStaff$accountArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
    document?: boolean | CourtStaff$documentArgs<ExtArgs>
    _count?: boolean | CourtStaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courtStaff"]>



  export type CourtStaffSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    avatar?: boolean
    socialId?: boolean
    email?: boolean
    operatingArea?: boolean
    isDeleted?: boolean
    courtId?: boolean
  }

  export type CourtStaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "avatar" | "socialId" | "email" | "operatingArea" | "isDeleted" | "courtId", ExtArgs["result"]["courtStaff"]>
  export type CourtStaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | CourtStaff$accountArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
    document?: boolean | CourtStaff$documentArgs<ExtArgs>
    _count?: boolean | CourtStaffCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CourtStaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourtStaff"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      court: Prisma.$CourtPayload<ExtArgs>
      document: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      avatar: string | null
      socialId: string | null
      email: string | null
      operatingArea: string | null
      isDeleted: boolean
      courtId: string
    }, ExtArgs["result"]["courtStaff"]>
    composites: {}
  }

  type CourtStaffGetPayload<S extends boolean | null | undefined | CourtStaffDefaultArgs> = $Result.GetResult<Prisma.$CourtStaffPayload, S>

  type CourtStaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourtStaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourtStaffCountAggregateInputType | true
    }

  export interface CourtStaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourtStaff'], meta: { name: 'CourtStaff' } }
    /**
     * Find zero or one CourtStaff that matches the filter.
     * @param {CourtStaffFindUniqueArgs} args - Arguments to find a CourtStaff
     * @example
     * // Get one CourtStaff
     * const courtStaff = await prisma.courtStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourtStaffFindUniqueArgs>(args: SelectSubset<T, CourtStaffFindUniqueArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourtStaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourtStaffFindUniqueOrThrowArgs} args - Arguments to find a CourtStaff
     * @example
     * // Get one CourtStaff
     * const courtStaff = await prisma.courtStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourtStaffFindUniqueOrThrowArgs>(args: SelectSubset<T, CourtStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourtStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtStaffFindFirstArgs} args - Arguments to find a CourtStaff
     * @example
     * // Get one CourtStaff
     * const courtStaff = await prisma.courtStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourtStaffFindFirstArgs>(args?: SelectSubset<T, CourtStaffFindFirstArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourtStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtStaffFindFirstOrThrowArgs} args - Arguments to find a CourtStaff
     * @example
     * // Get one CourtStaff
     * const courtStaff = await prisma.courtStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourtStaffFindFirstOrThrowArgs>(args?: SelectSubset<T, CourtStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourtStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourtStaffs
     * const courtStaffs = await prisma.courtStaff.findMany()
     * 
     * // Get first 10 CourtStaffs
     * const courtStaffs = await prisma.courtStaff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courtStaffWithIdOnly = await prisma.courtStaff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourtStaffFindManyArgs>(args?: SelectSubset<T, CourtStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourtStaff.
     * @param {CourtStaffCreateArgs} args - Arguments to create a CourtStaff.
     * @example
     * // Create one CourtStaff
     * const CourtStaff = await prisma.courtStaff.create({
     *   data: {
     *     // ... data to create a CourtStaff
     *   }
     * })
     * 
     */
    create<T extends CourtStaffCreateArgs>(args: SelectSubset<T, CourtStaffCreateArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourtStaffs.
     * @param {CourtStaffCreateManyArgs} args - Arguments to create many CourtStaffs.
     * @example
     * // Create many CourtStaffs
     * const courtStaff = await prisma.courtStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourtStaffCreateManyArgs>(args?: SelectSubset<T, CourtStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourtStaff.
     * @param {CourtStaffDeleteArgs} args - Arguments to delete one CourtStaff.
     * @example
     * // Delete one CourtStaff
     * const CourtStaff = await prisma.courtStaff.delete({
     *   where: {
     *     // ... filter to delete one CourtStaff
     *   }
     * })
     * 
     */
    delete<T extends CourtStaffDeleteArgs>(args: SelectSubset<T, CourtStaffDeleteArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourtStaff.
     * @param {CourtStaffUpdateArgs} args - Arguments to update one CourtStaff.
     * @example
     * // Update one CourtStaff
     * const courtStaff = await prisma.courtStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourtStaffUpdateArgs>(args: SelectSubset<T, CourtStaffUpdateArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourtStaffs.
     * @param {CourtStaffDeleteManyArgs} args - Arguments to filter CourtStaffs to delete.
     * @example
     * // Delete a few CourtStaffs
     * const { count } = await prisma.courtStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourtStaffDeleteManyArgs>(args?: SelectSubset<T, CourtStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourtStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourtStaffs
     * const courtStaff = await prisma.courtStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourtStaffUpdateManyArgs>(args: SelectSubset<T, CourtStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourtStaff.
     * @param {CourtStaffUpsertArgs} args - Arguments to update or create a CourtStaff.
     * @example
     * // Update or create a CourtStaff
     * const courtStaff = await prisma.courtStaff.upsert({
     *   create: {
     *     // ... data to create a CourtStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourtStaff we want to update
     *   }
     * })
     */
    upsert<T extends CourtStaffUpsertArgs>(args: SelectSubset<T, CourtStaffUpsertArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourtStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtStaffCountArgs} args - Arguments to filter CourtStaffs to count.
     * @example
     * // Count the number of CourtStaffs
     * const count = await prisma.courtStaff.count({
     *   where: {
     *     // ... the filter for the CourtStaffs we want to count
     *   }
     * })
    **/
    count<T extends CourtStaffCountArgs>(
      args?: Subset<T, CourtStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourtStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourtStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourtStaffAggregateArgs>(args: Subset<T, CourtStaffAggregateArgs>): Prisma.PrismaPromise<GetCourtStaffAggregateType<T>>

    /**
     * Group by CourtStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtStaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourtStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtStaffGroupByArgs['orderBy'] }
        : { orderBy?: CourtStaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourtStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourtStaff model
   */
  readonly fields: CourtStaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourtStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourtStaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends CourtStaff$accountArgs<ExtArgs> = {}>(args?: Subset<T, CourtStaff$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    court<T extends CourtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourtDefaultArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    document<T extends CourtStaff$documentArgs<ExtArgs> = {}>(args?: Subset<T, CourtStaff$documentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourtStaff model
   */
  interface CourtStaffFieldRefs {
    readonly id: FieldRef<"CourtStaff", 'String'>
    readonly name: FieldRef<"CourtStaff", 'String'>
    readonly phone: FieldRef<"CourtStaff", 'String'>
    readonly avatar: FieldRef<"CourtStaff", 'String'>
    readonly socialId: FieldRef<"CourtStaff", 'String'>
    readonly email: FieldRef<"CourtStaff", 'String'>
    readonly operatingArea: FieldRef<"CourtStaff", 'String'>
    readonly isDeleted: FieldRef<"CourtStaff", 'Boolean'>
    readonly courtId: FieldRef<"CourtStaff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourtStaff findUnique
   */
  export type CourtStaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * Filter, which CourtStaff to fetch.
     */
    where: CourtStaffWhereUniqueInput
  }

  /**
   * CourtStaff findUniqueOrThrow
   */
  export type CourtStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * Filter, which CourtStaff to fetch.
     */
    where: CourtStaffWhereUniqueInput
  }

  /**
   * CourtStaff findFirst
   */
  export type CourtStaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * Filter, which CourtStaff to fetch.
     */
    where?: CourtStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourtStaffs to fetch.
     */
    orderBy?: CourtStaffOrderByWithRelationInput | CourtStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourtStaffs.
     */
    cursor?: CourtStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourtStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourtStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourtStaffs.
     */
    distinct?: CourtStaffScalarFieldEnum | CourtStaffScalarFieldEnum[]
  }

  /**
   * CourtStaff findFirstOrThrow
   */
  export type CourtStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * Filter, which CourtStaff to fetch.
     */
    where?: CourtStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourtStaffs to fetch.
     */
    orderBy?: CourtStaffOrderByWithRelationInput | CourtStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourtStaffs.
     */
    cursor?: CourtStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourtStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourtStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourtStaffs.
     */
    distinct?: CourtStaffScalarFieldEnum | CourtStaffScalarFieldEnum[]
  }

  /**
   * CourtStaff findMany
   */
  export type CourtStaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * Filter, which CourtStaffs to fetch.
     */
    where?: CourtStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourtStaffs to fetch.
     */
    orderBy?: CourtStaffOrderByWithRelationInput | CourtStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourtStaffs.
     */
    cursor?: CourtStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourtStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourtStaffs.
     */
    skip?: number
    distinct?: CourtStaffScalarFieldEnum | CourtStaffScalarFieldEnum[]
  }

  /**
   * CourtStaff create
   */
  export type CourtStaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * The data needed to create a CourtStaff.
     */
    data: XOR<CourtStaffCreateInput, CourtStaffUncheckedCreateInput>
  }

  /**
   * CourtStaff createMany
   */
  export type CourtStaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourtStaffs.
     */
    data: CourtStaffCreateManyInput | CourtStaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourtStaff update
   */
  export type CourtStaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * The data needed to update a CourtStaff.
     */
    data: XOR<CourtStaffUpdateInput, CourtStaffUncheckedUpdateInput>
    /**
     * Choose, which CourtStaff to update.
     */
    where: CourtStaffWhereUniqueInput
  }

  /**
   * CourtStaff updateMany
   */
  export type CourtStaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourtStaffs.
     */
    data: XOR<CourtStaffUpdateManyMutationInput, CourtStaffUncheckedUpdateManyInput>
    /**
     * Filter which CourtStaffs to update
     */
    where?: CourtStaffWhereInput
    /**
     * Limit how many CourtStaffs to update.
     */
    limit?: number
  }

  /**
   * CourtStaff upsert
   */
  export type CourtStaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * The filter to search for the CourtStaff to update in case it exists.
     */
    where: CourtStaffWhereUniqueInput
    /**
     * In case the CourtStaff found by the `where` argument doesn't exist, create a new CourtStaff with this data.
     */
    create: XOR<CourtStaffCreateInput, CourtStaffUncheckedCreateInput>
    /**
     * In case the CourtStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourtStaffUpdateInput, CourtStaffUncheckedUpdateInput>
  }

  /**
   * CourtStaff delete
   */
  export type CourtStaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    /**
     * Filter which CourtStaff to delete.
     */
    where: CourtStaffWhereUniqueInput
  }

  /**
   * CourtStaff deleteMany
   */
  export type CourtStaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourtStaffs to delete
     */
    where?: CourtStaffWhereInput
    /**
     * Limit how many CourtStaffs to delete.
     */
    limit?: number
  }

  /**
   * CourtStaff.account
   */
  export type CourtStaff$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * CourtStaff.document
   */
  export type CourtStaff$documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * CourtStaff without action
   */
  export type CourtStaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
  }


  /**
   * Model DocumentList
   */

  export type AggregateDocumentList = {
    _count: DocumentListCountAggregateOutputType | null
    _min: DocumentListMinAggregateOutputType | null
    _max: DocumentListMaxAggregateOutputType | null
  }

  export type DocumentListMinAggregateOutputType = {
    id: string | null
    sendByCourtId: string | null
    sentAt: string | null
    fileUrl: string | null
  }

  export type DocumentListMaxAggregateOutputType = {
    id: string | null
    sendByCourtId: string | null
    sentAt: string | null
    fileUrl: string | null
  }

  export type DocumentListCountAggregateOutputType = {
    id: number
    sendByCourtId: number
    sentAt: number
    fileUrl: number
    _all: number
  }


  export type DocumentListMinAggregateInputType = {
    id?: true
    sendByCourtId?: true
    sentAt?: true
    fileUrl?: true
  }

  export type DocumentListMaxAggregateInputType = {
    id?: true
    sendByCourtId?: true
    sentAt?: true
    fileUrl?: true
  }

  export type DocumentListCountAggregateInputType = {
    id?: true
    sendByCourtId?: true
    sentAt?: true
    fileUrl?: true
    _all?: true
  }

  export type DocumentListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentList to aggregate.
     */
    where?: DocumentListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentLists to fetch.
     */
    orderBy?: DocumentListOrderByWithRelationInput | DocumentListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentLists
    **/
    _count?: true | DocumentListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentListMaxAggregateInputType
  }

  export type GetDocumentListAggregateType<T extends DocumentListAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentList[P]>
      : GetScalarType<T[P], AggregateDocumentList[P]>
  }




  export type DocumentListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentListWhereInput
    orderBy?: DocumentListOrderByWithAggregationInput | DocumentListOrderByWithAggregationInput[]
    by: DocumentListScalarFieldEnum[] | DocumentListScalarFieldEnum
    having?: DocumentListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentListCountAggregateInputType | true
    _min?: DocumentListMinAggregateInputType
    _max?: DocumentListMaxAggregateInputType
  }

  export type DocumentListGroupByOutputType = {
    id: string
    sendByCourtId: string
    sentAt: string
    fileUrl: string
    _count: DocumentListCountAggregateOutputType | null
    _min: DocumentListMinAggregateOutputType | null
    _max: DocumentListMaxAggregateOutputType | null
  }

  type GetDocumentListGroupByPayload<T extends DocumentListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentListGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentListGroupByOutputType[P]>
        }
      >
    >


  export type DocumentListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sendByCourtId?: boolean
    sentAt?: boolean
    fileUrl?: boolean
    sentByCourt?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentList"]>



  export type DocumentListSelectScalar = {
    id?: boolean
    sendByCourtId?: boolean
    sentAt?: boolean
    fileUrl?: boolean
  }

  export type DocumentListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sendByCourtId" | "sentAt" | "fileUrl", ExtArgs["result"]["documentList"]>
  export type DocumentListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentByCourt?: boolean | CourtDefaultArgs<ExtArgs>
  }

  export type $DocumentListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentList"
    objects: {
      sentByCourt: Prisma.$CourtPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sendByCourtId: string
      sentAt: string
      fileUrl: string
    }, ExtArgs["result"]["documentList"]>
    composites: {}
  }

  type DocumentListGetPayload<S extends boolean | null | undefined | DocumentListDefaultArgs> = $Result.GetResult<Prisma.$DocumentListPayload, S>

  type DocumentListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentListCountAggregateInputType | true
    }

  export interface DocumentListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentList'], meta: { name: 'DocumentList' } }
    /**
     * Find zero or one DocumentList that matches the filter.
     * @param {DocumentListFindUniqueArgs} args - Arguments to find a DocumentList
     * @example
     * // Get one DocumentList
     * const documentList = await prisma.documentList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentListFindUniqueArgs>(args: SelectSubset<T, DocumentListFindUniqueArgs<ExtArgs>>): Prisma__DocumentListClient<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentListFindUniqueOrThrowArgs} args - Arguments to find a DocumentList
     * @example
     * // Get one DocumentList
     * const documentList = await prisma.documentList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentListFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentListClient<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentListFindFirstArgs} args - Arguments to find a DocumentList
     * @example
     * // Get one DocumentList
     * const documentList = await prisma.documentList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentListFindFirstArgs>(args?: SelectSubset<T, DocumentListFindFirstArgs<ExtArgs>>): Prisma__DocumentListClient<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentListFindFirstOrThrowArgs} args - Arguments to find a DocumentList
     * @example
     * // Get one DocumentList
     * const documentList = await prisma.documentList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentListFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentListFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentListClient<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentLists
     * const documentLists = await prisma.documentList.findMany()
     * 
     * // Get first 10 DocumentLists
     * const documentLists = await prisma.documentList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentListWithIdOnly = await prisma.documentList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentListFindManyArgs>(args?: SelectSubset<T, DocumentListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentList.
     * @param {DocumentListCreateArgs} args - Arguments to create a DocumentList.
     * @example
     * // Create one DocumentList
     * const DocumentList = await prisma.documentList.create({
     *   data: {
     *     // ... data to create a DocumentList
     *   }
     * })
     * 
     */
    create<T extends DocumentListCreateArgs>(args: SelectSubset<T, DocumentListCreateArgs<ExtArgs>>): Prisma__DocumentListClient<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentLists.
     * @param {DocumentListCreateManyArgs} args - Arguments to create many DocumentLists.
     * @example
     * // Create many DocumentLists
     * const documentList = await prisma.documentList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentListCreateManyArgs>(args?: SelectSubset<T, DocumentListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocumentList.
     * @param {DocumentListDeleteArgs} args - Arguments to delete one DocumentList.
     * @example
     * // Delete one DocumentList
     * const DocumentList = await prisma.documentList.delete({
     *   where: {
     *     // ... filter to delete one DocumentList
     *   }
     * })
     * 
     */
    delete<T extends DocumentListDeleteArgs>(args: SelectSubset<T, DocumentListDeleteArgs<ExtArgs>>): Prisma__DocumentListClient<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentList.
     * @param {DocumentListUpdateArgs} args - Arguments to update one DocumentList.
     * @example
     * // Update one DocumentList
     * const documentList = await prisma.documentList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentListUpdateArgs>(args: SelectSubset<T, DocumentListUpdateArgs<ExtArgs>>): Prisma__DocumentListClient<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentLists.
     * @param {DocumentListDeleteManyArgs} args - Arguments to filter DocumentLists to delete.
     * @example
     * // Delete a few DocumentLists
     * const { count } = await prisma.documentList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentListDeleteManyArgs>(args?: SelectSubset<T, DocumentListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentLists
     * const documentList = await prisma.documentList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentListUpdateManyArgs>(args: SelectSubset<T, DocumentListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentList.
     * @param {DocumentListUpsertArgs} args - Arguments to update or create a DocumentList.
     * @example
     * // Update or create a DocumentList
     * const documentList = await prisma.documentList.upsert({
     *   create: {
     *     // ... data to create a DocumentList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentList we want to update
     *   }
     * })
     */
    upsert<T extends DocumentListUpsertArgs>(args: SelectSubset<T, DocumentListUpsertArgs<ExtArgs>>): Prisma__DocumentListClient<$Result.GetResult<Prisma.$DocumentListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentListCountArgs} args - Arguments to filter DocumentLists to count.
     * @example
     * // Count the number of DocumentLists
     * const count = await prisma.documentList.count({
     *   where: {
     *     // ... the filter for the DocumentLists we want to count
     *   }
     * })
    **/
    count<T extends DocumentListCountArgs>(
      args?: Subset<T, DocumentListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentListAggregateArgs>(args: Subset<T, DocumentListAggregateArgs>): Prisma.PrismaPromise<GetDocumentListAggregateType<T>>

    /**
     * Group by DocumentList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentListGroupByArgs['orderBy'] }
        : { orderBy?: DocumentListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentList model
   */
  readonly fields: DocumentListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentByCourt<T extends CourtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourtDefaultArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentList model
   */
  interface DocumentListFieldRefs {
    readonly id: FieldRef<"DocumentList", 'String'>
    readonly sendByCourtId: FieldRef<"DocumentList", 'String'>
    readonly sentAt: FieldRef<"DocumentList", 'String'>
    readonly fileUrl: FieldRef<"DocumentList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentList findUnique
   */
  export type DocumentListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentList to fetch.
     */
    where: DocumentListWhereUniqueInput
  }

  /**
   * DocumentList findUniqueOrThrow
   */
  export type DocumentListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentList to fetch.
     */
    where: DocumentListWhereUniqueInput
  }

  /**
   * DocumentList findFirst
   */
  export type DocumentListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentList to fetch.
     */
    where?: DocumentListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentLists to fetch.
     */
    orderBy?: DocumentListOrderByWithRelationInput | DocumentListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentLists.
     */
    cursor?: DocumentListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentLists.
     */
    distinct?: DocumentListScalarFieldEnum | DocumentListScalarFieldEnum[]
  }

  /**
   * DocumentList findFirstOrThrow
   */
  export type DocumentListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentList to fetch.
     */
    where?: DocumentListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentLists to fetch.
     */
    orderBy?: DocumentListOrderByWithRelationInput | DocumentListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentLists.
     */
    cursor?: DocumentListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentLists.
     */
    distinct?: DocumentListScalarFieldEnum | DocumentListScalarFieldEnum[]
  }

  /**
   * DocumentList findMany
   */
  export type DocumentListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * Filter, which DocumentLists to fetch.
     */
    where?: DocumentListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentLists to fetch.
     */
    orderBy?: DocumentListOrderByWithRelationInput | DocumentListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentLists.
     */
    cursor?: DocumentListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentLists.
     */
    skip?: number
    distinct?: DocumentListScalarFieldEnum | DocumentListScalarFieldEnum[]
  }

  /**
   * DocumentList create
   */
  export type DocumentListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentList.
     */
    data: XOR<DocumentListCreateInput, DocumentListUncheckedCreateInput>
  }

  /**
   * DocumentList createMany
   */
  export type DocumentListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentLists.
     */
    data: DocumentListCreateManyInput | DocumentListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentList update
   */
  export type DocumentListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentList.
     */
    data: XOR<DocumentListUpdateInput, DocumentListUncheckedUpdateInput>
    /**
     * Choose, which DocumentList to update.
     */
    where: DocumentListWhereUniqueInput
  }

  /**
   * DocumentList updateMany
   */
  export type DocumentListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentLists.
     */
    data: XOR<DocumentListUpdateManyMutationInput, DocumentListUncheckedUpdateManyInput>
    /**
     * Filter which DocumentLists to update
     */
    where?: DocumentListWhereInput
    /**
     * Limit how many DocumentLists to update.
     */
    limit?: number
  }

  /**
   * DocumentList upsert
   */
  export type DocumentListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentList to update in case it exists.
     */
    where: DocumentListWhereUniqueInput
    /**
     * In case the DocumentList found by the `where` argument doesn't exist, create a new DocumentList with this data.
     */
    create: XOR<DocumentListCreateInput, DocumentListUncheckedCreateInput>
    /**
     * In case the DocumentList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentListUpdateInput, DocumentListUncheckedUpdateInput>
  }

  /**
   * DocumentList delete
   */
  export type DocumentListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
    /**
     * Filter which DocumentList to delete.
     */
    where: DocumentListWhereUniqueInput
  }

  /**
   * DocumentList deleteMany
   */
  export type DocumentListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentLists to delete
     */
    where?: DocumentListWhereInput
    /**
     * Limit how many DocumentLists to delete.
     */
    limit?: number
  }

  /**
   * DocumentList without action
   */
  export type DocumentListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentList
     */
    select?: DocumentListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentList
     */
    omit?: DocumentListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentListInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    pricePerDocument: number | null
    travelDistance: number | null
    gasFee: number | null
    hazardousRoadFee: number | null
    otherFee: number | null
    innerTotalPrice: number | null
    outerTotalPrice: number | null
  }

  export type DocumentSumAggregateOutputType = {
    pricePerDocument: number | null
    travelDistance: number | null
    gasFee: number | null
    hazardousRoadFee: number | null
    otherFee: number | null
    innerTotalPrice: number | null
    outerTotalPrice: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    documentCode: string | null
    content: string | null
    receivedDate: Date | null
    processDeadline: Date | null
    processAddress: string | null
    processProof: string | null
    processStatus: $Enums.DocumentStatus | null
    note: string | null
    pricePerDocument: number | null
    travelDistance: number | null
    gasFee: number | null
    hazardousRoadFee: number | null
    otherFee: number | null
    innerTotalPrice: number | null
    outerTotalPrice: number | null
    courtStaffId: string | null
    courtId: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    documentCode: string | null
    content: string | null
    receivedDate: Date | null
    processDeadline: Date | null
    processAddress: string | null
    processProof: string | null
    processStatus: $Enums.DocumentStatus | null
    note: string | null
    pricePerDocument: number | null
    travelDistance: number | null
    gasFee: number | null
    hazardousRoadFee: number | null
    otherFee: number | null
    innerTotalPrice: number | null
    outerTotalPrice: number | null
    courtStaffId: string | null
    courtId: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    documentCode: number
    content: number
    receivedDate: number
    processDeadline: number
    processAddress: number
    processProof: number
    processStatus: number
    note: number
    pricePerDocument: number
    travelDistance: number
    gasFee: number
    hazardousRoadFee: number
    otherFee: number
    innerTotalPrice: number
    outerTotalPrice: number
    courtStaffId: number
    courtId: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    pricePerDocument?: true
    travelDistance?: true
    gasFee?: true
    hazardousRoadFee?: true
    otherFee?: true
    innerTotalPrice?: true
    outerTotalPrice?: true
  }

  export type DocumentSumAggregateInputType = {
    pricePerDocument?: true
    travelDistance?: true
    gasFee?: true
    hazardousRoadFee?: true
    otherFee?: true
    innerTotalPrice?: true
    outerTotalPrice?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    documentCode?: true
    content?: true
    receivedDate?: true
    processDeadline?: true
    processAddress?: true
    processProof?: true
    processStatus?: true
    note?: true
    pricePerDocument?: true
    travelDistance?: true
    gasFee?: true
    hazardousRoadFee?: true
    otherFee?: true
    innerTotalPrice?: true
    outerTotalPrice?: true
    courtStaffId?: true
    courtId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    documentCode?: true
    content?: true
    receivedDate?: true
    processDeadline?: true
    processAddress?: true
    processProof?: true
    processStatus?: true
    note?: true
    pricePerDocument?: true
    travelDistance?: true
    gasFee?: true
    hazardousRoadFee?: true
    otherFee?: true
    innerTotalPrice?: true
    outerTotalPrice?: true
    courtStaffId?: true
    courtId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    documentCode?: true
    content?: true
    receivedDate?: true
    processDeadline?: true
    processAddress?: true
    processProof?: true
    processStatus?: true
    note?: true
    pricePerDocument?: true
    travelDistance?: true
    gasFee?: true
    hazardousRoadFee?: true
    otherFee?: true
    innerTotalPrice?: true
    outerTotalPrice?: true
    courtStaffId?: true
    courtId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    documentCode: string
    content: string
    receivedDate: Date
    processDeadline: Date | null
    processAddress: string | null
    processProof: string | null
    processStatus: $Enums.DocumentStatus
    note: string | null
    pricePerDocument: number
    travelDistance: number
    gasFee: number
    hazardousRoadFee: number
    otherFee: number
    innerTotalPrice: number
    outerTotalPrice: number
    courtStaffId: string | null
    courtId: string
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentCode?: boolean
    content?: boolean
    receivedDate?: boolean
    processDeadline?: boolean
    processAddress?: boolean
    processProof?: boolean
    processStatus?: boolean
    note?: boolean
    pricePerDocument?: boolean
    travelDistance?: boolean
    gasFee?: boolean
    hazardousRoadFee?: boolean
    otherFee?: boolean
    innerTotalPrice?: boolean
    outerTotalPrice?: boolean
    courtStaffId?: boolean
    courtId?: boolean
    courtStaff?: boolean | Document$courtStaffArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>



  export type DocumentSelectScalar = {
    id?: boolean
    documentCode?: boolean
    content?: boolean
    receivedDate?: boolean
    processDeadline?: boolean
    processAddress?: boolean
    processProof?: boolean
    processStatus?: boolean
    note?: boolean
    pricePerDocument?: boolean
    travelDistance?: boolean
    gasFee?: boolean
    hazardousRoadFee?: boolean
    otherFee?: boolean
    innerTotalPrice?: boolean
    outerTotalPrice?: boolean
    courtStaffId?: boolean
    courtId?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentCode" | "content" | "receivedDate" | "processDeadline" | "processAddress" | "processProof" | "processStatus" | "note" | "pricePerDocument" | "travelDistance" | "gasFee" | "hazardousRoadFee" | "otherFee" | "innerTotalPrice" | "outerTotalPrice" | "courtStaffId" | "courtId", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courtStaff?: boolean | Document$courtStaffArgs<ExtArgs>
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      courtStaff: Prisma.$CourtStaffPayload<ExtArgs> | null
      court: Prisma.$CourtPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentCode: string
      content: string
      receivedDate: Date
      processDeadline: Date | null
      processAddress: string | null
      processProof: string | null
      processStatus: $Enums.DocumentStatus
      note: string | null
      pricePerDocument: number
      travelDistance: number
      gasFee: number
      hazardousRoadFee: number
      otherFee: number
      innerTotalPrice: number
      outerTotalPrice: number
      courtStaffId: string | null
      courtId: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courtStaff<T extends Document$courtStaffArgs<ExtArgs> = {}>(args?: Subset<T, Document$courtStaffArgs<ExtArgs>>): Prisma__CourtStaffClient<$Result.GetResult<Prisma.$CourtStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    court<T extends CourtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourtDefaultArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly documentCode: FieldRef<"Document", 'String'>
    readonly content: FieldRef<"Document", 'String'>
    readonly receivedDate: FieldRef<"Document", 'DateTime'>
    readonly processDeadline: FieldRef<"Document", 'DateTime'>
    readonly processAddress: FieldRef<"Document", 'String'>
    readonly processProof: FieldRef<"Document", 'String'>
    readonly processStatus: FieldRef<"Document", 'DocumentStatus'>
    readonly note: FieldRef<"Document", 'String'>
    readonly pricePerDocument: FieldRef<"Document", 'Float'>
    readonly travelDistance: FieldRef<"Document", 'Float'>
    readonly gasFee: FieldRef<"Document", 'Float'>
    readonly hazardousRoadFee: FieldRef<"Document", 'Float'>
    readonly otherFee: FieldRef<"Document", 'Float'>
    readonly innerTotalPrice: FieldRef<"Document", 'Float'>
    readonly outerTotalPrice: FieldRef<"Document", 'Float'>
    readonly courtStaffId: FieldRef<"Document", 'String'>
    readonly courtId: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.courtStaff
   */
  export type Document$courtStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtStaff
     */
    select?: CourtStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourtStaff
     */
    omit?: CourtStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtStaffInclude<ExtArgs> | null
    where?: CourtStaffWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isRead: boolean | null
    accountId: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    isRead: boolean | null
    accountId: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    content: number
    isRead: number
    accountId: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isRead?: true
    accountId?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isRead?: true
    accountId?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isRead?: true
    accountId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    title: string
    content: string
    isRead: boolean
    accountId: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    isRead?: boolean
    accountId?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    isRead?: boolean
    accountId?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "isRead" | "accountId" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      isRead: boolean
      accountId: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly content: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly accountId: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    avatar: 'avatar',
    role: 'role',
    courtStaffId: 'courtStaffId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CourtScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email',
    courtNumber: 'courtNumber',
    isDeleted: 'isDeleted'
  };

  export type CourtScalarFieldEnum = (typeof CourtScalarFieldEnum)[keyof typeof CourtScalarFieldEnum]


  export const CourtStaffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    avatar: 'avatar',
    socialId: 'socialId',
    email: 'email',
    operatingArea: 'operatingArea',
    isDeleted: 'isDeleted',
    courtId: 'courtId'
  };

  export type CourtStaffScalarFieldEnum = (typeof CourtStaffScalarFieldEnum)[keyof typeof CourtStaffScalarFieldEnum]


  export const DocumentListScalarFieldEnum: {
    id: 'id',
    sendByCourtId: 'sendByCourtId',
    sentAt: 'sentAt',
    fileUrl: 'fileUrl'
  };

  export type DocumentListScalarFieldEnum = (typeof DocumentListScalarFieldEnum)[keyof typeof DocumentListScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    documentCode: 'documentCode',
    content: 'content',
    receivedDate: 'receivedDate',
    processDeadline: 'processDeadline',
    processAddress: 'processAddress',
    processProof: 'processProof',
    processStatus: 'processStatus',
    note: 'note',
    pricePerDocument: 'pricePerDocument',
    travelDistance: 'travelDistance',
    gasFee: 'gasFee',
    hazardousRoadFee: 'hazardousRoadFee',
    otherFee: 'otherFee',
    innerTotalPrice: 'innerTotalPrice',
    outerTotalPrice: 'outerTotalPrice',
    courtStaffId: 'courtStaffId',
    courtId: 'courtId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    isRead: 'isRead',
    accountId: 'accountId',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    courtStaffId: 'courtStaffId'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const CourtOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email'
  };

  export type CourtOrderByRelevanceFieldEnum = (typeof CourtOrderByRelevanceFieldEnum)[keyof typeof CourtOrderByRelevanceFieldEnum]


  export const CourtStaffOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    avatar: 'avatar',
    socialId: 'socialId',
    email: 'email',
    operatingArea: 'operatingArea',
    courtId: 'courtId'
  };

  export type CourtStaffOrderByRelevanceFieldEnum = (typeof CourtStaffOrderByRelevanceFieldEnum)[keyof typeof CourtStaffOrderByRelevanceFieldEnum]


  export const DocumentListOrderByRelevanceFieldEnum: {
    id: 'id',
    sendByCourtId: 'sendByCourtId',
    sentAt: 'sentAt',
    fileUrl: 'fileUrl'
  };

  export type DocumentListOrderByRelevanceFieldEnum = (typeof DocumentListOrderByRelevanceFieldEnum)[keyof typeof DocumentListOrderByRelevanceFieldEnum]


  export const DocumentOrderByRelevanceFieldEnum: {
    id: 'id',
    documentCode: 'documentCode',
    content: 'content',
    processAddress: 'processAddress',
    processProof: 'processProof',
    note: 'note',
    courtStaffId: 'courtStaffId',
    courtId: 'courtId'
  };

  export type DocumentOrderByRelevanceFieldEnum = (typeof DocumentOrderByRelevanceFieldEnum)[keyof typeof DocumentOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    accountId: 'accountId'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    avatar?: StringNullableFilter<"Account"> | string | null
    role?: EnumRoleFilter<"Account"> | $Enums.Role
    courtStaffId?: StringNullableFilter<"Account"> | string | null
    courtStaff?: XOR<CourtStaffNullableScalarRelationFilter, CourtStaffWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    courtStaffId?: SortOrderInput | SortOrder
    courtStaff?: CourtStaffOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    courtStaffId?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    avatar?: StringNullableFilter<"Account"> | string | null
    role?: EnumRoleFilter<"Account"> | $Enums.Role
    courtStaff?: XOR<CourtStaffNullableScalarRelationFilter, CourtStaffWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "email" | "courtStaffId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    courtStaffId?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    email?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    avatar?: StringNullableWithAggregatesFilter<"Account"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Account"> | $Enums.Role
    courtStaffId?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type CourtWhereInput = {
    AND?: CourtWhereInput | CourtWhereInput[]
    OR?: CourtWhereInput[]
    NOT?: CourtWhereInput | CourtWhereInput[]
    id?: StringFilter<"Court"> | string
    name?: StringFilter<"Court"> | string
    address?: StringFilter<"Court"> | string
    phone?: StringNullableFilter<"Court"> | string | null
    email?: StringNullableFilter<"Court"> | string | null
    courtNumber?: IntFilter<"Court"> | number
    isDeleted?: BoolFilter<"Court"> | boolean
    staff?: CourtStaffListRelationFilter
    documentList?: DocumentListListRelationFilter
    document?: DocumentListRelationFilter
  }

  export type CourtOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    courtNumber?: SortOrder
    isDeleted?: SortOrder
    staff?: CourtStaffOrderByRelationAggregateInput
    documentList?: DocumentListOrderByRelationAggregateInput
    document?: DocumentOrderByRelationAggregateInput
    _relevance?: CourtOrderByRelevanceInput
  }

  export type CourtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourtWhereInput | CourtWhereInput[]
    OR?: CourtWhereInput[]
    NOT?: CourtWhereInput | CourtWhereInput[]
    name?: StringFilter<"Court"> | string
    address?: StringFilter<"Court"> | string
    phone?: StringNullableFilter<"Court"> | string | null
    email?: StringNullableFilter<"Court"> | string | null
    courtNumber?: IntFilter<"Court"> | number
    isDeleted?: BoolFilter<"Court"> | boolean
    staff?: CourtStaffListRelationFilter
    documentList?: DocumentListListRelationFilter
    document?: DocumentListRelationFilter
  }, "id">

  export type CourtOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    courtNumber?: SortOrder
    isDeleted?: SortOrder
    _count?: CourtCountOrderByAggregateInput
    _avg?: CourtAvgOrderByAggregateInput
    _max?: CourtMaxOrderByAggregateInput
    _min?: CourtMinOrderByAggregateInput
    _sum?: CourtSumOrderByAggregateInput
  }

  export type CourtScalarWhereWithAggregatesInput = {
    AND?: CourtScalarWhereWithAggregatesInput | CourtScalarWhereWithAggregatesInput[]
    OR?: CourtScalarWhereWithAggregatesInput[]
    NOT?: CourtScalarWhereWithAggregatesInput | CourtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Court"> | string
    name?: StringWithAggregatesFilter<"Court"> | string
    address?: StringWithAggregatesFilter<"Court"> | string
    phone?: StringNullableWithAggregatesFilter<"Court"> | string | null
    email?: StringNullableWithAggregatesFilter<"Court"> | string | null
    courtNumber?: IntWithAggregatesFilter<"Court"> | number
    isDeleted?: BoolWithAggregatesFilter<"Court"> | boolean
  }

  export type CourtStaffWhereInput = {
    AND?: CourtStaffWhereInput | CourtStaffWhereInput[]
    OR?: CourtStaffWhereInput[]
    NOT?: CourtStaffWhereInput | CourtStaffWhereInput[]
    id?: StringFilter<"CourtStaff"> | string
    name?: StringFilter<"CourtStaff"> | string
    phone?: StringNullableFilter<"CourtStaff"> | string | null
    avatar?: StringNullableFilter<"CourtStaff"> | string | null
    socialId?: StringNullableFilter<"CourtStaff"> | string | null
    email?: StringNullableFilter<"CourtStaff"> | string | null
    operatingArea?: StringNullableFilter<"CourtStaff"> | string | null
    isDeleted?: BoolFilter<"CourtStaff"> | boolean
    courtId?: StringFilter<"CourtStaff"> | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
    document?: DocumentListRelationFilter
  }

  export type CourtStaffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    socialId?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    operatingArea?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    courtId?: SortOrder
    account?: AccountOrderByWithRelationInput
    court?: CourtOrderByWithRelationInput
    document?: DocumentOrderByRelationAggregateInput
    _relevance?: CourtStaffOrderByRelevanceInput
  }

  export type CourtStaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourtStaffWhereInput | CourtStaffWhereInput[]
    OR?: CourtStaffWhereInput[]
    NOT?: CourtStaffWhereInput | CourtStaffWhereInput[]
    name?: StringFilter<"CourtStaff"> | string
    phone?: StringNullableFilter<"CourtStaff"> | string | null
    avatar?: StringNullableFilter<"CourtStaff"> | string | null
    socialId?: StringNullableFilter<"CourtStaff"> | string | null
    email?: StringNullableFilter<"CourtStaff"> | string | null
    operatingArea?: StringNullableFilter<"CourtStaff"> | string | null
    isDeleted?: BoolFilter<"CourtStaff"> | boolean
    courtId?: StringFilter<"CourtStaff"> | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
    document?: DocumentListRelationFilter
  }, "id">

  export type CourtStaffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    socialId?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    operatingArea?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    courtId?: SortOrder
    _count?: CourtStaffCountOrderByAggregateInput
    _max?: CourtStaffMaxOrderByAggregateInput
    _min?: CourtStaffMinOrderByAggregateInput
  }

  export type CourtStaffScalarWhereWithAggregatesInput = {
    AND?: CourtStaffScalarWhereWithAggregatesInput | CourtStaffScalarWhereWithAggregatesInput[]
    OR?: CourtStaffScalarWhereWithAggregatesInput[]
    NOT?: CourtStaffScalarWhereWithAggregatesInput | CourtStaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourtStaff"> | string
    name?: StringWithAggregatesFilter<"CourtStaff"> | string
    phone?: StringNullableWithAggregatesFilter<"CourtStaff"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"CourtStaff"> | string | null
    socialId?: StringNullableWithAggregatesFilter<"CourtStaff"> | string | null
    email?: StringNullableWithAggregatesFilter<"CourtStaff"> | string | null
    operatingArea?: StringNullableWithAggregatesFilter<"CourtStaff"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"CourtStaff"> | boolean
    courtId?: StringWithAggregatesFilter<"CourtStaff"> | string
  }

  export type DocumentListWhereInput = {
    AND?: DocumentListWhereInput | DocumentListWhereInput[]
    OR?: DocumentListWhereInput[]
    NOT?: DocumentListWhereInput | DocumentListWhereInput[]
    id?: StringFilter<"DocumentList"> | string
    sendByCourtId?: StringFilter<"DocumentList"> | string
    sentAt?: StringFilter<"DocumentList"> | string
    fileUrl?: StringFilter<"DocumentList"> | string
    sentByCourt?: XOR<CourtScalarRelationFilter, CourtWhereInput>
  }

  export type DocumentListOrderByWithRelationInput = {
    id?: SortOrder
    sendByCourtId?: SortOrder
    sentAt?: SortOrder
    fileUrl?: SortOrder
    sentByCourt?: CourtOrderByWithRelationInput
    _relevance?: DocumentListOrderByRelevanceInput
  }

  export type DocumentListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentListWhereInput | DocumentListWhereInput[]
    OR?: DocumentListWhereInput[]
    NOT?: DocumentListWhereInput | DocumentListWhereInput[]
    sendByCourtId?: StringFilter<"DocumentList"> | string
    sentAt?: StringFilter<"DocumentList"> | string
    fileUrl?: StringFilter<"DocumentList"> | string
    sentByCourt?: XOR<CourtScalarRelationFilter, CourtWhereInput>
  }, "id">

  export type DocumentListOrderByWithAggregationInput = {
    id?: SortOrder
    sendByCourtId?: SortOrder
    sentAt?: SortOrder
    fileUrl?: SortOrder
    _count?: DocumentListCountOrderByAggregateInput
    _max?: DocumentListMaxOrderByAggregateInput
    _min?: DocumentListMinOrderByAggregateInput
  }

  export type DocumentListScalarWhereWithAggregatesInput = {
    AND?: DocumentListScalarWhereWithAggregatesInput | DocumentListScalarWhereWithAggregatesInput[]
    OR?: DocumentListScalarWhereWithAggregatesInput[]
    NOT?: DocumentListScalarWhereWithAggregatesInput | DocumentListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentList"> | string
    sendByCourtId?: StringWithAggregatesFilter<"DocumentList"> | string
    sentAt?: StringWithAggregatesFilter<"DocumentList"> | string
    fileUrl?: StringWithAggregatesFilter<"DocumentList"> | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    documentCode?: StringFilter<"Document"> | string
    content?: StringFilter<"Document"> | string
    receivedDate?: DateTimeFilter<"Document"> | Date | string
    processDeadline?: DateTimeNullableFilter<"Document"> | Date | string | null
    processAddress?: StringNullableFilter<"Document"> | string | null
    processProof?: StringNullableFilter<"Document"> | string | null
    processStatus?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    note?: StringNullableFilter<"Document"> | string | null
    pricePerDocument?: FloatFilter<"Document"> | number
    travelDistance?: FloatFilter<"Document"> | number
    gasFee?: FloatFilter<"Document"> | number
    hazardousRoadFee?: FloatFilter<"Document"> | number
    otherFee?: FloatFilter<"Document"> | number
    innerTotalPrice?: FloatFilter<"Document"> | number
    outerTotalPrice?: FloatFilter<"Document"> | number
    courtStaffId?: StringNullableFilter<"Document"> | string | null
    courtId?: StringFilter<"Document"> | string
    courtStaff?: XOR<CourtStaffNullableScalarRelationFilter, CourtStaffWhereInput> | null
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    documentCode?: SortOrder
    content?: SortOrder
    receivedDate?: SortOrder
    processDeadline?: SortOrderInput | SortOrder
    processAddress?: SortOrderInput | SortOrder
    processProof?: SortOrderInput | SortOrder
    processStatus?: SortOrder
    note?: SortOrderInput | SortOrder
    pricePerDocument?: SortOrder
    travelDistance?: SortOrder
    gasFee?: SortOrder
    hazardousRoadFee?: SortOrder
    otherFee?: SortOrder
    innerTotalPrice?: SortOrder
    outerTotalPrice?: SortOrder
    courtStaffId?: SortOrderInput | SortOrder
    courtId?: SortOrder
    courtStaff?: CourtStaffOrderByWithRelationInput
    court?: CourtOrderByWithRelationInput
    _relevance?: DocumentOrderByRelevanceInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    documentCode?: StringFilter<"Document"> | string
    content?: StringFilter<"Document"> | string
    receivedDate?: DateTimeFilter<"Document"> | Date | string
    processDeadline?: DateTimeNullableFilter<"Document"> | Date | string | null
    processAddress?: StringNullableFilter<"Document"> | string | null
    processProof?: StringNullableFilter<"Document"> | string | null
    processStatus?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    note?: StringNullableFilter<"Document"> | string | null
    pricePerDocument?: FloatFilter<"Document"> | number
    travelDistance?: FloatFilter<"Document"> | number
    gasFee?: FloatFilter<"Document"> | number
    hazardousRoadFee?: FloatFilter<"Document"> | number
    otherFee?: FloatFilter<"Document"> | number
    innerTotalPrice?: FloatFilter<"Document"> | number
    outerTotalPrice?: FloatFilter<"Document"> | number
    courtStaffId?: StringNullableFilter<"Document"> | string | null
    courtId?: StringFilter<"Document"> | string
    courtStaff?: XOR<CourtStaffNullableScalarRelationFilter, CourtStaffWhereInput> | null
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    documentCode?: SortOrder
    content?: SortOrder
    receivedDate?: SortOrder
    processDeadline?: SortOrderInput | SortOrder
    processAddress?: SortOrderInput | SortOrder
    processProof?: SortOrderInput | SortOrder
    processStatus?: SortOrder
    note?: SortOrderInput | SortOrder
    pricePerDocument?: SortOrder
    travelDistance?: SortOrder
    gasFee?: SortOrder
    hazardousRoadFee?: SortOrder
    otherFee?: SortOrder
    innerTotalPrice?: SortOrder
    outerTotalPrice?: SortOrder
    courtStaffId?: SortOrderInput | SortOrder
    courtId?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    documentCode?: StringWithAggregatesFilter<"Document"> | string
    content?: StringWithAggregatesFilter<"Document"> | string
    receivedDate?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    processDeadline?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    processAddress?: StringNullableWithAggregatesFilter<"Document"> | string | null
    processProof?: StringNullableWithAggregatesFilter<"Document"> | string | null
    processStatus?: EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus
    note?: StringNullableWithAggregatesFilter<"Document"> | string | null
    pricePerDocument?: FloatWithAggregatesFilter<"Document"> | number
    travelDistance?: FloatWithAggregatesFilter<"Document"> | number
    gasFee?: FloatWithAggregatesFilter<"Document"> | number
    hazardousRoadFee?: FloatWithAggregatesFilter<"Document"> | number
    otherFee?: FloatWithAggregatesFilter<"Document"> | number
    innerTotalPrice?: FloatWithAggregatesFilter<"Document"> | number
    outerTotalPrice?: FloatWithAggregatesFilter<"Document"> | number
    courtStaffId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    courtId?: StringWithAggregatesFilter<"Document"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    accountId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    accountId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    content?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    accountId?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    avatar?: string | null
    role?: $Enums.Role
    courtStaff?: CourtStaffCreateNestedOneWithoutAccountInput
    notifications?: NotificationCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    avatar?: string | null
    role?: $Enums.Role
    courtStaffId?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    courtStaff?: CourtStaffUpdateOneWithoutAccountNestedInput
    notifications?: NotificationUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    courtStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    avatar?: string | null
    role?: $Enums.Role
    courtStaffId?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    courtStaffId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourtCreateInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
    staff?: CourtStaffCreateNestedManyWithoutCourtInput
    documentList?: DocumentListCreateNestedManyWithoutSentByCourtInput
    document?: DocumentCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
    staff?: CourtStaffUncheckedCreateNestedManyWithoutCourtInput
    documentList?: DocumentListUncheckedCreateNestedManyWithoutSentByCourtInput
    document?: DocumentUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    staff?: CourtStaffUpdateManyWithoutCourtNestedInput
    documentList?: DocumentListUpdateManyWithoutSentByCourtNestedInput
    document?: DocumentUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    staff?: CourtStaffUncheckedUpdateManyWithoutCourtNestedInput
    documentList?: DocumentListUncheckedUpdateManyWithoutSentByCourtNestedInput
    document?: DocumentUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type CourtCreateManyInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
  }

  export type CourtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourtStaffCreateInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    account?: AccountCreateNestedOneWithoutCourtStaffInput
    court: CourtCreateNestedOneWithoutStaffInput
    document?: DocumentCreateNestedManyWithoutCourtStaffInput
  }

  export type CourtStaffUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    courtId: string
    account?: AccountUncheckedCreateNestedOneWithoutCourtStaffInput
    document?: DocumentUncheckedCreateNestedManyWithoutCourtStaffInput
  }

  export type CourtStaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneWithoutCourtStaffNestedInput
    court?: CourtUpdateOneRequiredWithoutStaffNestedInput
    document?: DocumentUpdateManyWithoutCourtStaffNestedInput
  }

  export type CourtStaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    courtId?: StringFieldUpdateOperationsInput | string
    account?: AccountUncheckedUpdateOneWithoutCourtStaffNestedInput
    document?: DocumentUncheckedUpdateManyWithoutCourtStaffNestedInput
  }

  export type CourtStaffCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    courtId: string
  }

  export type CourtStaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourtStaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    courtId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentListCreateInput = {
    id?: string
    sentAt: string
    fileUrl: string
    sentByCourt: CourtCreateNestedOneWithoutDocumentListInput
  }

  export type DocumentListUncheckedCreateInput = {
    id?: string
    sendByCourtId: string
    sentAt: string
    fileUrl: string
  }

  export type DocumentListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    sentByCourt?: CourtUpdateOneRequiredWithoutDocumentListNestedInput
  }

  export type DocumentListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sendByCourtId?: StringFieldUpdateOperationsInput | string
    sentAt?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentListCreateManyInput = {
    id?: string
    sendByCourtId: string
    sentAt: string
    fileUrl: string
  }

  export type DocumentListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sendByCourtId?: StringFieldUpdateOperationsInput | string
    sentAt?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    courtStaff?: CourtStaffCreateNestedOneWithoutDocumentInput
    court: CourtCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    courtStaffId?: string | null
    courtId: string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    courtStaff?: CourtStaffUpdateOneWithoutDocumentNestedInput
    court?: CourtUpdateOneRequiredWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    courtStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    courtId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    courtStaffId?: string | null
    courtId: string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    courtStaffId?: NullableStringFieldUpdateOperationsInput | string | null
    courtId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    isRead?: boolean
    accountId: string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    title: string
    content: string
    isRead?: boolean
    accountId: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CourtStaffNullableScalarRelationFilter = {
    is?: CourtStaffWhereInput | null
    isNot?: CourtStaffWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    courtStaffId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    courtStaffId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    courtStaffId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CourtStaffListRelationFilter = {
    every?: CourtStaffWhereInput
    some?: CourtStaffWhereInput
    none?: CourtStaffWhereInput
  }

  export type DocumentListListRelationFilter = {
    every?: DocumentListWhereInput
    some?: DocumentListWhereInput
    none?: DocumentListWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type CourtStaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourtOrderByRelevanceInput = {
    fields: CourtOrderByRelevanceFieldEnum | CourtOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourtCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    courtNumber?: SortOrder
    isDeleted?: SortOrder
  }

  export type CourtAvgOrderByAggregateInput = {
    courtNumber?: SortOrder
  }

  export type CourtMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    courtNumber?: SortOrder
    isDeleted?: SortOrder
  }

  export type CourtMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    courtNumber?: SortOrder
    isDeleted?: SortOrder
  }

  export type CourtSumOrderByAggregateInput = {
    courtNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type CourtScalarRelationFilter = {
    is?: CourtWhereInput
    isNot?: CourtWhereInput
  }

  export type CourtStaffOrderByRelevanceInput = {
    fields: CourtStaffOrderByRelevanceFieldEnum | CourtStaffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourtStaffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    socialId?: SortOrder
    email?: SortOrder
    operatingArea?: SortOrder
    isDeleted?: SortOrder
    courtId?: SortOrder
  }

  export type CourtStaffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    socialId?: SortOrder
    email?: SortOrder
    operatingArea?: SortOrder
    isDeleted?: SortOrder
    courtId?: SortOrder
  }

  export type CourtStaffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    socialId?: SortOrder
    email?: SortOrder
    operatingArea?: SortOrder
    isDeleted?: SortOrder
    courtId?: SortOrder
  }

  export type DocumentListOrderByRelevanceInput = {
    fields: DocumentListOrderByRelevanceFieldEnum | DocumentListOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentListCountOrderByAggregateInput = {
    id?: SortOrder
    sendByCourtId?: SortOrder
    sentAt?: SortOrder
    fileUrl?: SortOrder
  }

  export type DocumentListMaxOrderByAggregateInput = {
    id?: SortOrder
    sendByCourtId?: SortOrder
    sentAt?: SortOrder
    fileUrl?: SortOrder
  }

  export type DocumentListMinOrderByAggregateInput = {
    id?: SortOrder
    sendByCourtId?: SortOrder
    sentAt?: SortOrder
    fileUrl?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[]
    notIn?: $Enums.DocumentStatus[]
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DocumentOrderByRelevanceInput = {
    fields: DocumentOrderByRelevanceFieldEnum | DocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    documentCode?: SortOrder
    content?: SortOrder
    receivedDate?: SortOrder
    processDeadline?: SortOrder
    processAddress?: SortOrder
    processProof?: SortOrder
    processStatus?: SortOrder
    note?: SortOrder
    pricePerDocument?: SortOrder
    travelDistance?: SortOrder
    gasFee?: SortOrder
    hazardousRoadFee?: SortOrder
    otherFee?: SortOrder
    innerTotalPrice?: SortOrder
    outerTotalPrice?: SortOrder
    courtStaffId?: SortOrder
    courtId?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    pricePerDocument?: SortOrder
    travelDistance?: SortOrder
    gasFee?: SortOrder
    hazardousRoadFee?: SortOrder
    otherFee?: SortOrder
    innerTotalPrice?: SortOrder
    outerTotalPrice?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    documentCode?: SortOrder
    content?: SortOrder
    receivedDate?: SortOrder
    processDeadline?: SortOrder
    processAddress?: SortOrder
    processProof?: SortOrder
    processStatus?: SortOrder
    note?: SortOrder
    pricePerDocument?: SortOrder
    travelDistance?: SortOrder
    gasFee?: SortOrder
    hazardousRoadFee?: SortOrder
    otherFee?: SortOrder
    innerTotalPrice?: SortOrder
    outerTotalPrice?: SortOrder
    courtStaffId?: SortOrder
    courtId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    documentCode?: SortOrder
    content?: SortOrder
    receivedDate?: SortOrder
    processDeadline?: SortOrder
    processAddress?: SortOrder
    processProof?: SortOrder
    processStatus?: SortOrder
    note?: SortOrder
    pricePerDocument?: SortOrder
    travelDistance?: SortOrder
    gasFee?: SortOrder
    hazardousRoadFee?: SortOrder
    otherFee?: SortOrder
    innerTotalPrice?: SortOrder
    outerTotalPrice?: SortOrder
    courtStaffId?: SortOrder
    courtId?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    pricePerDocument?: SortOrder
    travelDistance?: SortOrder
    gasFee?: SortOrder
    hazardousRoadFee?: SortOrder
    otherFee?: SortOrder
    innerTotalPrice?: SortOrder
    outerTotalPrice?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[]
    notIn?: $Enums.DocumentStatus[]
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourtStaffCreateNestedOneWithoutAccountInput = {
    create?: XOR<CourtStaffCreateWithoutAccountInput, CourtStaffUncheckedCreateWithoutAccountInput>
    connectOrCreate?: CourtStaffCreateOrConnectWithoutAccountInput
    connect?: CourtStaffWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutAccountInput = {
    create?: XOR<NotificationCreateWithoutAccountInput, NotificationUncheckedCreateWithoutAccountInput> | NotificationCreateWithoutAccountInput[] | NotificationUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAccountInput | NotificationCreateOrConnectWithoutAccountInput[]
    createMany?: NotificationCreateManyAccountInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<NotificationCreateWithoutAccountInput, NotificationUncheckedCreateWithoutAccountInput> | NotificationCreateWithoutAccountInput[] | NotificationUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAccountInput | NotificationCreateOrConnectWithoutAccountInput[]
    createMany?: NotificationCreateManyAccountInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CourtStaffUpdateOneWithoutAccountNestedInput = {
    create?: XOR<CourtStaffCreateWithoutAccountInput, CourtStaffUncheckedCreateWithoutAccountInput>
    connectOrCreate?: CourtStaffCreateOrConnectWithoutAccountInput
    upsert?: CourtStaffUpsertWithoutAccountInput
    disconnect?: CourtStaffWhereInput | boolean
    delete?: CourtStaffWhereInput | boolean
    connect?: CourtStaffWhereUniqueInput
    update?: XOR<XOR<CourtStaffUpdateToOneWithWhereWithoutAccountInput, CourtStaffUpdateWithoutAccountInput>, CourtStaffUncheckedUpdateWithoutAccountInput>
  }

  export type NotificationUpdateManyWithoutAccountNestedInput = {
    create?: XOR<NotificationCreateWithoutAccountInput, NotificationUncheckedCreateWithoutAccountInput> | NotificationCreateWithoutAccountInput[] | NotificationUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAccountInput | NotificationCreateOrConnectWithoutAccountInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAccountInput | NotificationUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: NotificationCreateManyAccountInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAccountInput | NotificationUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAccountInput | NotificationUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<NotificationCreateWithoutAccountInput, NotificationUncheckedCreateWithoutAccountInput> | NotificationCreateWithoutAccountInput[] | NotificationUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAccountInput | NotificationCreateOrConnectWithoutAccountInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAccountInput | NotificationUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: NotificationCreateManyAccountInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAccountInput | NotificationUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAccountInput | NotificationUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CourtStaffCreateNestedManyWithoutCourtInput = {
    create?: XOR<CourtStaffCreateWithoutCourtInput, CourtStaffUncheckedCreateWithoutCourtInput> | CourtStaffCreateWithoutCourtInput[] | CourtStaffUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: CourtStaffCreateOrConnectWithoutCourtInput | CourtStaffCreateOrConnectWithoutCourtInput[]
    createMany?: CourtStaffCreateManyCourtInputEnvelope
    connect?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
  }

  export type DocumentListCreateNestedManyWithoutSentByCourtInput = {
    create?: XOR<DocumentListCreateWithoutSentByCourtInput, DocumentListUncheckedCreateWithoutSentByCourtInput> | DocumentListCreateWithoutSentByCourtInput[] | DocumentListUncheckedCreateWithoutSentByCourtInput[]
    connectOrCreate?: DocumentListCreateOrConnectWithoutSentByCourtInput | DocumentListCreateOrConnectWithoutSentByCourtInput[]
    createMany?: DocumentListCreateManySentByCourtInputEnvelope
    connect?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutCourtInput = {
    create?: XOR<DocumentCreateWithoutCourtInput, DocumentUncheckedCreateWithoutCourtInput> | DocumentCreateWithoutCourtInput[] | DocumentUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCourtInput | DocumentCreateOrConnectWithoutCourtInput[]
    createMany?: DocumentCreateManyCourtInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CourtStaffUncheckedCreateNestedManyWithoutCourtInput = {
    create?: XOR<CourtStaffCreateWithoutCourtInput, CourtStaffUncheckedCreateWithoutCourtInput> | CourtStaffCreateWithoutCourtInput[] | CourtStaffUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: CourtStaffCreateOrConnectWithoutCourtInput | CourtStaffCreateOrConnectWithoutCourtInput[]
    createMany?: CourtStaffCreateManyCourtInputEnvelope
    connect?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
  }

  export type DocumentListUncheckedCreateNestedManyWithoutSentByCourtInput = {
    create?: XOR<DocumentListCreateWithoutSentByCourtInput, DocumentListUncheckedCreateWithoutSentByCourtInput> | DocumentListCreateWithoutSentByCourtInput[] | DocumentListUncheckedCreateWithoutSentByCourtInput[]
    connectOrCreate?: DocumentListCreateOrConnectWithoutSentByCourtInput | DocumentListCreateOrConnectWithoutSentByCourtInput[]
    createMany?: DocumentListCreateManySentByCourtInputEnvelope
    connect?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutCourtInput = {
    create?: XOR<DocumentCreateWithoutCourtInput, DocumentUncheckedCreateWithoutCourtInput> | DocumentCreateWithoutCourtInput[] | DocumentUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCourtInput | DocumentCreateOrConnectWithoutCourtInput[]
    createMany?: DocumentCreateManyCourtInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CourtStaffUpdateManyWithoutCourtNestedInput = {
    create?: XOR<CourtStaffCreateWithoutCourtInput, CourtStaffUncheckedCreateWithoutCourtInput> | CourtStaffCreateWithoutCourtInput[] | CourtStaffUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: CourtStaffCreateOrConnectWithoutCourtInput | CourtStaffCreateOrConnectWithoutCourtInput[]
    upsert?: CourtStaffUpsertWithWhereUniqueWithoutCourtInput | CourtStaffUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: CourtStaffCreateManyCourtInputEnvelope
    set?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
    disconnect?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
    delete?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
    connect?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
    update?: CourtStaffUpdateWithWhereUniqueWithoutCourtInput | CourtStaffUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: CourtStaffUpdateManyWithWhereWithoutCourtInput | CourtStaffUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: CourtStaffScalarWhereInput | CourtStaffScalarWhereInput[]
  }

  export type DocumentListUpdateManyWithoutSentByCourtNestedInput = {
    create?: XOR<DocumentListCreateWithoutSentByCourtInput, DocumentListUncheckedCreateWithoutSentByCourtInput> | DocumentListCreateWithoutSentByCourtInput[] | DocumentListUncheckedCreateWithoutSentByCourtInput[]
    connectOrCreate?: DocumentListCreateOrConnectWithoutSentByCourtInput | DocumentListCreateOrConnectWithoutSentByCourtInput[]
    upsert?: DocumentListUpsertWithWhereUniqueWithoutSentByCourtInput | DocumentListUpsertWithWhereUniqueWithoutSentByCourtInput[]
    createMany?: DocumentListCreateManySentByCourtInputEnvelope
    set?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
    disconnect?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
    delete?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
    connect?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
    update?: DocumentListUpdateWithWhereUniqueWithoutSentByCourtInput | DocumentListUpdateWithWhereUniqueWithoutSentByCourtInput[]
    updateMany?: DocumentListUpdateManyWithWhereWithoutSentByCourtInput | DocumentListUpdateManyWithWhereWithoutSentByCourtInput[]
    deleteMany?: DocumentListScalarWhereInput | DocumentListScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutCourtNestedInput = {
    create?: XOR<DocumentCreateWithoutCourtInput, DocumentUncheckedCreateWithoutCourtInput> | DocumentCreateWithoutCourtInput[] | DocumentUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCourtInput | DocumentCreateOrConnectWithoutCourtInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCourtInput | DocumentUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: DocumentCreateManyCourtInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCourtInput | DocumentUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCourtInput | DocumentUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CourtStaffUncheckedUpdateManyWithoutCourtNestedInput = {
    create?: XOR<CourtStaffCreateWithoutCourtInput, CourtStaffUncheckedCreateWithoutCourtInput> | CourtStaffCreateWithoutCourtInput[] | CourtStaffUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: CourtStaffCreateOrConnectWithoutCourtInput | CourtStaffCreateOrConnectWithoutCourtInput[]
    upsert?: CourtStaffUpsertWithWhereUniqueWithoutCourtInput | CourtStaffUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: CourtStaffCreateManyCourtInputEnvelope
    set?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
    disconnect?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
    delete?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
    connect?: CourtStaffWhereUniqueInput | CourtStaffWhereUniqueInput[]
    update?: CourtStaffUpdateWithWhereUniqueWithoutCourtInput | CourtStaffUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: CourtStaffUpdateManyWithWhereWithoutCourtInput | CourtStaffUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: CourtStaffScalarWhereInput | CourtStaffScalarWhereInput[]
  }

  export type DocumentListUncheckedUpdateManyWithoutSentByCourtNestedInput = {
    create?: XOR<DocumentListCreateWithoutSentByCourtInput, DocumentListUncheckedCreateWithoutSentByCourtInput> | DocumentListCreateWithoutSentByCourtInput[] | DocumentListUncheckedCreateWithoutSentByCourtInput[]
    connectOrCreate?: DocumentListCreateOrConnectWithoutSentByCourtInput | DocumentListCreateOrConnectWithoutSentByCourtInput[]
    upsert?: DocumentListUpsertWithWhereUniqueWithoutSentByCourtInput | DocumentListUpsertWithWhereUniqueWithoutSentByCourtInput[]
    createMany?: DocumentListCreateManySentByCourtInputEnvelope
    set?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
    disconnect?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
    delete?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
    connect?: DocumentListWhereUniqueInput | DocumentListWhereUniqueInput[]
    update?: DocumentListUpdateWithWhereUniqueWithoutSentByCourtInput | DocumentListUpdateWithWhereUniqueWithoutSentByCourtInput[]
    updateMany?: DocumentListUpdateManyWithWhereWithoutSentByCourtInput | DocumentListUpdateManyWithWhereWithoutSentByCourtInput[]
    deleteMany?: DocumentListScalarWhereInput | DocumentListScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutCourtNestedInput = {
    create?: XOR<DocumentCreateWithoutCourtInput, DocumentUncheckedCreateWithoutCourtInput> | DocumentCreateWithoutCourtInput[] | DocumentUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCourtInput | DocumentCreateOrConnectWithoutCourtInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCourtInput | DocumentUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: DocumentCreateManyCourtInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCourtInput | DocumentUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCourtInput | DocumentUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutCourtStaffInput = {
    create?: XOR<AccountCreateWithoutCourtStaffInput, AccountUncheckedCreateWithoutCourtStaffInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCourtStaffInput
    connect?: AccountWhereUniqueInput
  }

  export type CourtCreateNestedOneWithoutStaffInput = {
    create?: XOR<CourtCreateWithoutStaffInput, CourtUncheckedCreateWithoutStaffInput>
    connectOrCreate?: CourtCreateOrConnectWithoutStaffInput
    connect?: CourtWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutCourtStaffInput = {
    create?: XOR<DocumentCreateWithoutCourtStaffInput, DocumentUncheckedCreateWithoutCourtStaffInput> | DocumentCreateWithoutCourtStaffInput[] | DocumentUncheckedCreateWithoutCourtStaffInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCourtStaffInput | DocumentCreateOrConnectWithoutCourtStaffInput[]
    createMany?: DocumentCreateManyCourtStaffInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedOneWithoutCourtStaffInput = {
    create?: XOR<AccountCreateWithoutCourtStaffInput, AccountUncheckedCreateWithoutCourtStaffInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCourtStaffInput
    connect?: AccountWhereUniqueInput
  }

  export type DocumentUncheckedCreateNestedManyWithoutCourtStaffInput = {
    create?: XOR<DocumentCreateWithoutCourtStaffInput, DocumentUncheckedCreateWithoutCourtStaffInput> | DocumentCreateWithoutCourtStaffInput[] | DocumentUncheckedCreateWithoutCourtStaffInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCourtStaffInput | DocumentCreateOrConnectWithoutCourtStaffInput[]
    createMany?: DocumentCreateManyCourtStaffInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AccountUpdateOneWithoutCourtStaffNestedInput = {
    create?: XOR<AccountCreateWithoutCourtStaffInput, AccountUncheckedCreateWithoutCourtStaffInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCourtStaffInput
    upsert?: AccountUpsertWithoutCourtStaffInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCourtStaffInput, AccountUpdateWithoutCourtStaffInput>, AccountUncheckedUpdateWithoutCourtStaffInput>
  }

  export type CourtUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<CourtCreateWithoutStaffInput, CourtUncheckedCreateWithoutStaffInput>
    connectOrCreate?: CourtCreateOrConnectWithoutStaffInput
    upsert?: CourtUpsertWithoutStaffInput
    connect?: CourtWhereUniqueInput
    update?: XOR<XOR<CourtUpdateToOneWithWhereWithoutStaffInput, CourtUpdateWithoutStaffInput>, CourtUncheckedUpdateWithoutStaffInput>
  }

  export type DocumentUpdateManyWithoutCourtStaffNestedInput = {
    create?: XOR<DocumentCreateWithoutCourtStaffInput, DocumentUncheckedCreateWithoutCourtStaffInput> | DocumentCreateWithoutCourtStaffInput[] | DocumentUncheckedCreateWithoutCourtStaffInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCourtStaffInput | DocumentCreateOrConnectWithoutCourtStaffInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCourtStaffInput | DocumentUpsertWithWhereUniqueWithoutCourtStaffInput[]
    createMany?: DocumentCreateManyCourtStaffInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCourtStaffInput | DocumentUpdateWithWhereUniqueWithoutCourtStaffInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCourtStaffInput | DocumentUpdateManyWithWhereWithoutCourtStaffInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AccountUncheckedUpdateOneWithoutCourtStaffNestedInput = {
    create?: XOR<AccountCreateWithoutCourtStaffInput, AccountUncheckedCreateWithoutCourtStaffInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCourtStaffInput
    upsert?: AccountUpsertWithoutCourtStaffInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCourtStaffInput, AccountUpdateWithoutCourtStaffInput>, AccountUncheckedUpdateWithoutCourtStaffInput>
  }

  export type DocumentUncheckedUpdateManyWithoutCourtStaffNestedInput = {
    create?: XOR<DocumentCreateWithoutCourtStaffInput, DocumentUncheckedCreateWithoutCourtStaffInput> | DocumentCreateWithoutCourtStaffInput[] | DocumentUncheckedCreateWithoutCourtStaffInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCourtStaffInput | DocumentCreateOrConnectWithoutCourtStaffInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCourtStaffInput | DocumentUpsertWithWhereUniqueWithoutCourtStaffInput[]
    createMany?: DocumentCreateManyCourtStaffInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCourtStaffInput | DocumentUpdateWithWhereUniqueWithoutCourtStaffInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCourtStaffInput | DocumentUpdateManyWithWhereWithoutCourtStaffInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CourtCreateNestedOneWithoutDocumentListInput = {
    create?: XOR<CourtCreateWithoutDocumentListInput, CourtUncheckedCreateWithoutDocumentListInput>
    connectOrCreate?: CourtCreateOrConnectWithoutDocumentListInput
    connect?: CourtWhereUniqueInput
  }

  export type CourtUpdateOneRequiredWithoutDocumentListNestedInput = {
    create?: XOR<CourtCreateWithoutDocumentListInput, CourtUncheckedCreateWithoutDocumentListInput>
    connectOrCreate?: CourtCreateOrConnectWithoutDocumentListInput
    upsert?: CourtUpsertWithoutDocumentListInput
    connect?: CourtWhereUniqueInput
    update?: XOR<XOR<CourtUpdateToOneWithWhereWithoutDocumentListInput, CourtUpdateWithoutDocumentListInput>, CourtUncheckedUpdateWithoutDocumentListInput>
  }

  export type CourtStaffCreateNestedOneWithoutDocumentInput = {
    create?: XOR<CourtStaffCreateWithoutDocumentInput, CourtStaffUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CourtStaffCreateOrConnectWithoutDocumentInput
    connect?: CourtStaffWhereUniqueInput
  }

  export type CourtCreateNestedOneWithoutDocumentInput = {
    create?: XOR<CourtCreateWithoutDocumentInput, CourtUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CourtCreateOrConnectWithoutDocumentInput
    connect?: CourtWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourtStaffUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<CourtStaffCreateWithoutDocumentInput, CourtStaffUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CourtStaffCreateOrConnectWithoutDocumentInput
    upsert?: CourtStaffUpsertWithoutDocumentInput
    disconnect?: CourtStaffWhereInput | boolean
    delete?: CourtStaffWhereInput | boolean
    connect?: CourtStaffWhereUniqueInput
    update?: XOR<XOR<CourtStaffUpdateToOneWithWhereWithoutDocumentInput, CourtStaffUpdateWithoutDocumentInput>, CourtStaffUncheckedUpdateWithoutDocumentInput>
  }

  export type CourtUpdateOneRequiredWithoutDocumentNestedInput = {
    create?: XOR<CourtCreateWithoutDocumentInput, CourtUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: CourtCreateOrConnectWithoutDocumentInput
    upsert?: CourtUpsertWithoutDocumentInput
    connect?: CourtWhereUniqueInput
    update?: XOR<XOR<CourtUpdateToOneWithWhereWithoutDocumentInput, CourtUpdateWithoutDocumentInput>, CourtUncheckedUpdateWithoutDocumentInput>
  }

  export type AccountCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<AccountCreateWithoutNotificationsInput, AccountUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutNotificationsInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<AccountCreateWithoutNotificationsInput, AccountUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutNotificationsInput
    upsert?: AccountUpsertWithoutNotificationsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutNotificationsInput, AccountUpdateWithoutNotificationsInput>, AccountUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[]
    notIn?: $Enums.DocumentStatus[]
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[]
    notIn?: $Enums.DocumentStatus[]
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CourtStaffCreateWithoutAccountInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    court: CourtCreateNestedOneWithoutStaffInput
    document?: DocumentCreateNestedManyWithoutCourtStaffInput
  }

  export type CourtStaffUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    courtId: string
    document?: DocumentUncheckedCreateNestedManyWithoutCourtStaffInput
  }

  export type CourtStaffCreateOrConnectWithoutAccountInput = {
    where: CourtStaffWhereUniqueInput
    create: XOR<CourtStaffCreateWithoutAccountInput, CourtStaffUncheckedCreateWithoutAccountInput>
  }

  export type NotificationCreateWithoutAccountInput = {
    id?: string
    title: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutAccountInput = {
    id?: string
    title: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutAccountInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutAccountInput, NotificationUncheckedCreateWithoutAccountInput>
  }

  export type NotificationCreateManyAccountInputEnvelope = {
    data: NotificationCreateManyAccountInput | NotificationCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CourtStaffUpsertWithoutAccountInput = {
    update: XOR<CourtStaffUpdateWithoutAccountInput, CourtStaffUncheckedUpdateWithoutAccountInput>
    create: XOR<CourtStaffCreateWithoutAccountInput, CourtStaffUncheckedCreateWithoutAccountInput>
    where?: CourtStaffWhereInput
  }

  export type CourtStaffUpdateToOneWithWhereWithoutAccountInput = {
    where?: CourtStaffWhereInput
    data: XOR<CourtStaffUpdateWithoutAccountInput, CourtStaffUncheckedUpdateWithoutAccountInput>
  }

  export type CourtStaffUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    court?: CourtUpdateOneRequiredWithoutStaffNestedInput
    document?: DocumentUpdateManyWithoutCourtStaffNestedInput
  }

  export type CourtStaffUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    courtId?: StringFieldUpdateOperationsInput | string
    document?: DocumentUncheckedUpdateManyWithoutCourtStaffNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutAccountInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutAccountInput, NotificationUncheckedUpdateWithoutAccountInput>
    create: XOR<NotificationCreateWithoutAccountInput, NotificationUncheckedCreateWithoutAccountInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutAccountInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutAccountInput, NotificationUncheckedUpdateWithoutAccountInput>
  }

  export type NotificationUpdateManyWithWhereWithoutAccountInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutAccountInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    accountId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type CourtStaffCreateWithoutCourtInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    account?: AccountCreateNestedOneWithoutCourtStaffInput
    document?: DocumentCreateNestedManyWithoutCourtStaffInput
  }

  export type CourtStaffUncheckedCreateWithoutCourtInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    account?: AccountUncheckedCreateNestedOneWithoutCourtStaffInput
    document?: DocumentUncheckedCreateNestedManyWithoutCourtStaffInput
  }

  export type CourtStaffCreateOrConnectWithoutCourtInput = {
    where: CourtStaffWhereUniqueInput
    create: XOR<CourtStaffCreateWithoutCourtInput, CourtStaffUncheckedCreateWithoutCourtInput>
  }

  export type CourtStaffCreateManyCourtInputEnvelope = {
    data: CourtStaffCreateManyCourtInput | CourtStaffCreateManyCourtInput[]
    skipDuplicates?: boolean
  }

  export type DocumentListCreateWithoutSentByCourtInput = {
    id?: string
    sentAt: string
    fileUrl: string
  }

  export type DocumentListUncheckedCreateWithoutSentByCourtInput = {
    id?: string
    sentAt: string
    fileUrl: string
  }

  export type DocumentListCreateOrConnectWithoutSentByCourtInput = {
    where: DocumentListWhereUniqueInput
    create: XOR<DocumentListCreateWithoutSentByCourtInput, DocumentListUncheckedCreateWithoutSentByCourtInput>
  }

  export type DocumentListCreateManySentByCourtInputEnvelope = {
    data: DocumentListCreateManySentByCourtInput | DocumentListCreateManySentByCourtInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutCourtInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    courtStaff?: CourtStaffCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutCourtInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    courtStaffId?: string | null
  }

  export type DocumentCreateOrConnectWithoutCourtInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCourtInput, DocumentUncheckedCreateWithoutCourtInput>
  }

  export type DocumentCreateManyCourtInputEnvelope = {
    data: DocumentCreateManyCourtInput | DocumentCreateManyCourtInput[]
    skipDuplicates?: boolean
  }

  export type CourtStaffUpsertWithWhereUniqueWithoutCourtInput = {
    where: CourtStaffWhereUniqueInput
    update: XOR<CourtStaffUpdateWithoutCourtInput, CourtStaffUncheckedUpdateWithoutCourtInput>
    create: XOR<CourtStaffCreateWithoutCourtInput, CourtStaffUncheckedCreateWithoutCourtInput>
  }

  export type CourtStaffUpdateWithWhereUniqueWithoutCourtInput = {
    where: CourtStaffWhereUniqueInput
    data: XOR<CourtStaffUpdateWithoutCourtInput, CourtStaffUncheckedUpdateWithoutCourtInput>
  }

  export type CourtStaffUpdateManyWithWhereWithoutCourtInput = {
    where: CourtStaffScalarWhereInput
    data: XOR<CourtStaffUpdateManyMutationInput, CourtStaffUncheckedUpdateManyWithoutCourtInput>
  }

  export type CourtStaffScalarWhereInput = {
    AND?: CourtStaffScalarWhereInput | CourtStaffScalarWhereInput[]
    OR?: CourtStaffScalarWhereInput[]
    NOT?: CourtStaffScalarWhereInput | CourtStaffScalarWhereInput[]
    id?: StringFilter<"CourtStaff"> | string
    name?: StringFilter<"CourtStaff"> | string
    phone?: StringNullableFilter<"CourtStaff"> | string | null
    avatar?: StringNullableFilter<"CourtStaff"> | string | null
    socialId?: StringNullableFilter<"CourtStaff"> | string | null
    email?: StringNullableFilter<"CourtStaff"> | string | null
    operatingArea?: StringNullableFilter<"CourtStaff"> | string | null
    isDeleted?: BoolFilter<"CourtStaff"> | boolean
    courtId?: StringFilter<"CourtStaff"> | string
  }

  export type DocumentListUpsertWithWhereUniqueWithoutSentByCourtInput = {
    where: DocumentListWhereUniqueInput
    update: XOR<DocumentListUpdateWithoutSentByCourtInput, DocumentListUncheckedUpdateWithoutSentByCourtInput>
    create: XOR<DocumentListCreateWithoutSentByCourtInput, DocumentListUncheckedCreateWithoutSentByCourtInput>
  }

  export type DocumentListUpdateWithWhereUniqueWithoutSentByCourtInput = {
    where: DocumentListWhereUniqueInput
    data: XOR<DocumentListUpdateWithoutSentByCourtInput, DocumentListUncheckedUpdateWithoutSentByCourtInput>
  }

  export type DocumentListUpdateManyWithWhereWithoutSentByCourtInput = {
    where: DocumentListScalarWhereInput
    data: XOR<DocumentListUpdateManyMutationInput, DocumentListUncheckedUpdateManyWithoutSentByCourtInput>
  }

  export type DocumentListScalarWhereInput = {
    AND?: DocumentListScalarWhereInput | DocumentListScalarWhereInput[]
    OR?: DocumentListScalarWhereInput[]
    NOT?: DocumentListScalarWhereInput | DocumentListScalarWhereInput[]
    id?: StringFilter<"DocumentList"> | string
    sendByCourtId?: StringFilter<"DocumentList"> | string
    sentAt?: StringFilter<"DocumentList"> | string
    fileUrl?: StringFilter<"DocumentList"> | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutCourtInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutCourtInput, DocumentUncheckedUpdateWithoutCourtInput>
    create: XOR<DocumentCreateWithoutCourtInput, DocumentUncheckedCreateWithoutCourtInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutCourtInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutCourtInput, DocumentUncheckedUpdateWithoutCourtInput>
  }

  export type DocumentUpdateManyWithWhereWithoutCourtInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutCourtInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    documentCode?: StringFilter<"Document"> | string
    content?: StringFilter<"Document"> | string
    receivedDate?: DateTimeFilter<"Document"> | Date | string
    processDeadline?: DateTimeNullableFilter<"Document"> | Date | string | null
    processAddress?: StringNullableFilter<"Document"> | string | null
    processProof?: StringNullableFilter<"Document"> | string | null
    processStatus?: EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus
    note?: StringNullableFilter<"Document"> | string | null
    pricePerDocument?: FloatFilter<"Document"> | number
    travelDistance?: FloatFilter<"Document"> | number
    gasFee?: FloatFilter<"Document"> | number
    hazardousRoadFee?: FloatFilter<"Document"> | number
    otherFee?: FloatFilter<"Document"> | number
    innerTotalPrice?: FloatFilter<"Document"> | number
    outerTotalPrice?: FloatFilter<"Document"> | number
    courtStaffId?: StringNullableFilter<"Document"> | string | null
    courtId?: StringFilter<"Document"> | string
  }

  export type AccountCreateWithoutCourtStaffInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    avatar?: string | null
    role?: $Enums.Role
    notifications?: NotificationCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCourtStaffInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    avatar?: string | null
    role?: $Enums.Role
    notifications?: NotificationUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCourtStaffInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCourtStaffInput, AccountUncheckedCreateWithoutCourtStaffInput>
  }

  export type CourtCreateWithoutStaffInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
    documentList?: DocumentListCreateNestedManyWithoutSentByCourtInput
    document?: DocumentCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
    documentList?: DocumentListUncheckedCreateNestedManyWithoutSentByCourtInput
    document?: DocumentUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtCreateOrConnectWithoutStaffInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutStaffInput, CourtUncheckedCreateWithoutStaffInput>
  }

  export type DocumentCreateWithoutCourtStaffInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    court: CourtCreateNestedOneWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutCourtStaffInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    courtId: string
  }

  export type DocumentCreateOrConnectWithoutCourtStaffInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCourtStaffInput, DocumentUncheckedCreateWithoutCourtStaffInput>
  }

  export type DocumentCreateManyCourtStaffInputEnvelope = {
    data: DocumentCreateManyCourtStaffInput | DocumentCreateManyCourtStaffInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutCourtStaffInput = {
    update: XOR<AccountUpdateWithoutCourtStaffInput, AccountUncheckedUpdateWithoutCourtStaffInput>
    create: XOR<AccountCreateWithoutCourtStaffInput, AccountUncheckedCreateWithoutCourtStaffInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCourtStaffInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCourtStaffInput, AccountUncheckedUpdateWithoutCourtStaffInput>
  }

  export type AccountUpdateWithoutCourtStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    notifications?: NotificationUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCourtStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    notifications?: NotificationUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CourtUpsertWithoutStaffInput = {
    update: XOR<CourtUpdateWithoutStaffInput, CourtUncheckedUpdateWithoutStaffInput>
    create: XOR<CourtCreateWithoutStaffInput, CourtUncheckedCreateWithoutStaffInput>
    where?: CourtWhereInput
  }

  export type CourtUpdateToOneWithWhereWithoutStaffInput = {
    where?: CourtWhereInput
    data: XOR<CourtUpdateWithoutStaffInput, CourtUncheckedUpdateWithoutStaffInput>
  }

  export type CourtUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    documentList?: DocumentListUpdateManyWithoutSentByCourtNestedInput
    document?: DocumentUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    documentList?: DocumentListUncheckedUpdateManyWithoutSentByCourtNestedInput
    document?: DocumentUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutCourtStaffInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutCourtStaffInput, DocumentUncheckedUpdateWithoutCourtStaffInput>
    create: XOR<DocumentCreateWithoutCourtStaffInput, DocumentUncheckedCreateWithoutCourtStaffInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutCourtStaffInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutCourtStaffInput, DocumentUncheckedUpdateWithoutCourtStaffInput>
  }

  export type DocumentUpdateManyWithWhereWithoutCourtStaffInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutCourtStaffInput>
  }

  export type CourtCreateWithoutDocumentListInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
    staff?: CourtStaffCreateNestedManyWithoutCourtInput
    document?: DocumentCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateWithoutDocumentListInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
    staff?: CourtStaffUncheckedCreateNestedManyWithoutCourtInput
    document?: DocumentUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtCreateOrConnectWithoutDocumentListInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutDocumentListInput, CourtUncheckedCreateWithoutDocumentListInput>
  }

  export type CourtUpsertWithoutDocumentListInput = {
    update: XOR<CourtUpdateWithoutDocumentListInput, CourtUncheckedUpdateWithoutDocumentListInput>
    create: XOR<CourtCreateWithoutDocumentListInput, CourtUncheckedCreateWithoutDocumentListInput>
    where?: CourtWhereInput
  }

  export type CourtUpdateToOneWithWhereWithoutDocumentListInput = {
    where?: CourtWhereInput
    data: XOR<CourtUpdateWithoutDocumentListInput, CourtUncheckedUpdateWithoutDocumentListInput>
  }

  export type CourtUpdateWithoutDocumentListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    staff?: CourtStaffUpdateManyWithoutCourtNestedInput
    document?: DocumentUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutDocumentListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    staff?: CourtStaffUncheckedUpdateManyWithoutCourtNestedInput
    document?: DocumentUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type CourtStaffCreateWithoutDocumentInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    account?: AccountCreateNestedOneWithoutCourtStaffInput
    court: CourtCreateNestedOneWithoutStaffInput
  }

  export type CourtStaffUncheckedCreateWithoutDocumentInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
    courtId: string
    account?: AccountUncheckedCreateNestedOneWithoutCourtStaffInput
  }

  export type CourtStaffCreateOrConnectWithoutDocumentInput = {
    where: CourtStaffWhereUniqueInput
    create: XOR<CourtStaffCreateWithoutDocumentInput, CourtStaffUncheckedCreateWithoutDocumentInput>
  }

  export type CourtCreateWithoutDocumentInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
    staff?: CourtStaffCreateNestedManyWithoutCourtInput
    documentList?: DocumentListCreateNestedManyWithoutSentByCourtInput
  }

  export type CourtUncheckedCreateWithoutDocumentInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    email?: string | null
    courtNumber: number
    isDeleted?: boolean
    staff?: CourtStaffUncheckedCreateNestedManyWithoutCourtInput
    documentList?: DocumentListUncheckedCreateNestedManyWithoutSentByCourtInput
  }

  export type CourtCreateOrConnectWithoutDocumentInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutDocumentInput, CourtUncheckedCreateWithoutDocumentInput>
  }

  export type CourtStaffUpsertWithoutDocumentInput = {
    update: XOR<CourtStaffUpdateWithoutDocumentInput, CourtStaffUncheckedUpdateWithoutDocumentInput>
    create: XOR<CourtStaffCreateWithoutDocumentInput, CourtStaffUncheckedCreateWithoutDocumentInput>
    where?: CourtStaffWhereInput
  }

  export type CourtStaffUpdateToOneWithWhereWithoutDocumentInput = {
    where?: CourtStaffWhereInput
    data: XOR<CourtStaffUpdateWithoutDocumentInput, CourtStaffUncheckedUpdateWithoutDocumentInput>
  }

  export type CourtStaffUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneWithoutCourtStaffNestedInput
    court?: CourtUpdateOneRequiredWithoutStaffNestedInput
  }

  export type CourtStaffUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    courtId?: StringFieldUpdateOperationsInput | string
    account?: AccountUncheckedUpdateOneWithoutCourtStaffNestedInput
  }

  export type CourtUpsertWithoutDocumentInput = {
    update: XOR<CourtUpdateWithoutDocumentInput, CourtUncheckedUpdateWithoutDocumentInput>
    create: XOR<CourtCreateWithoutDocumentInput, CourtUncheckedCreateWithoutDocumentInput>
    where?: CourtWhereInput
  }

  export type CourtUpdateToOneWithWhereWithoutDocumentInput = {
    where?: CourtWhereInput
    data: XOR<CourtUpdateWithoutDocumentInput, CourtUncheckedUpdateWithoutDocumentInput>
  }

  export type CourtUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    staff?: CourtStaffUpdateManyWithoutCourtNestedInput
    documentList?: DocumentListUpdateManyWithoutSentByCourtNestedInput
  }

  export type CourtUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courtNumber?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    staff?: CourtStaffUncheckedUpdateManyWithoutCourtNestedInput
    documentList?: DocumentListUncheckedUpdateManyWithoutSentByCourtNestedInput
  }

  export type AccountCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    avatar?: string | null
    role?: $Enums.Role
    courtStaff?: CourtStaffCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    avatar?: string | null
    role?: $Enums.Role
    courtStaffId?: string | null
  }

  export type AccountCreateOrConnectWithoutNotificationsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutNotificationsInput, AccountUncheckedCreateWithoutNotificationsInput>
  }

  export type AccountUpsertWithoutNotificationsInput = {
    update: XOR<AccountUpdateWithoutNotificationsInput, AccountUncheckedUpdateWithoutNotificationsInput>
    create: XOR<AccountCreateWithoutNotificationsInput, AccountUncheckedCreateWithoutNotificationsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutNotificationsInput, AccountUncheckedUpdateWithoutNotificationsInput>
  }

  export type AccountUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    courtStaff?: CourtStaffUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    courtStaffId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyAccountInput = {
    id?: string
    title: string
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourtStaffCreateManyCourtInput = {
    id?: string
    name: string
    phone?: string | null
    avatar?: string | null
    socialId?: string | null
    email?: string | null
    operatingArea?: string | null
    isDeleted?: boolean
  }

  export type DocumentListCreateManySentByCourtInput = {
    id?: string
    sentAt: string
    fileUrl: string
  }

  export type DocumentCreateManyCourtInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    courtStaffId?: string | null
  }

  export type CourtStaffUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneWithoutCourtStaffNestedInput
    document?: DocumentUpdateManyWithoutCourtStaffNestedInput
  }

  export type CourtStaffUncheckedUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUncheckedUpdateOneWithoutCourtStaffNestedInput
    document?: DocumentUncheckedUpdateManyWithoutCourtStaffNestedInput
  }

  export type CourtStaffUncheckedUpdateManyWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    operatingArea?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DocumentListUpdateWithoutSentByCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentListUncheckedUpdateWithoutSentByCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentListUncheckedUpdateManyWithoutSentByCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    courtStaff?: CourtStaffUpdateOneWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    courtStaffId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutCourtInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    courtStaffId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateManyCourtStaffInput = {
    id?: string
    documentCode: string
    content: string
    receivedDate?: Date | string
    processDeadline?: Date | string | null
    processAddress?: string | null
    processProof?: string | null
    processStatus?: $Enums.DocumentStatus
    note?: string | null
    pricePerDocument?: number
    travelDistance?: number
    gasFee?: number
    hazardousRoadFee?: number
    otherFee?: number
    innerTotalPrice?: number
    outerTotalPrice?: number
    courtId: string
  }

  export type DocumentUpdateWithoutCourtStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    court?: CourtUpdateOneRequiredWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCourtStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    courtId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyWithoutCourtStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentCode?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receivedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processAddress?: NullableStringFieldUpdateOperationsInput | string | null
    processProof?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerDocument?: FloatFieldUpdateOperationsInput | number
    travelDistance?: FloatFieldUpdateOperationsInput | number
    gasFee?: FloatFieldUpdateOperationsInput | number
    hazardousRoadFee?: FloatFieldUpdateOperationsInput | number
    otherFee?: FloatFieldUpdateOperationsInput | number
    innerTotalPrice?: FloatFieldUpdateOperationsInput | number
    outerTotalPrice?: FloatFieldUpdateOperationsInput | number
    courtId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
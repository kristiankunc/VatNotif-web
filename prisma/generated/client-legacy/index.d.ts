
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model discord_notifications
 * 
 */
export type discord_notifications = $Result.DefaultSelection<Prisma.$discord_notificationsPayload>
/**
 * Model push_notifications
 * 
 */
export type push_notifications = $Result.DefaultSelection<Prisma.$push_notificationsPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model watched_callsigns
 * 
 */
export type watched_callsigns = $Result.DefaultSelection<Prisma.$watched_callsignsPayload>
/**
 * Model ignored_cids
 * 
 */
export type ignored_cids = $Result.DefaultSelection<Prisma.$ignored_cidsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Discord_notifications
 * const discord_notifications = await prisma.discord_notifications.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Discord_notifications
   * const discord_notifications = await prisma.discord_notifications.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.discord_notifications`: Exposes CRUD operations for the **discord_notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discord_notifications
    * const discord_notifications = await prisma.discord_notifications.findMany()
    * ```
    */
  get discord_notifications(): Prisma.discord_notificationsDelegate<ExtArgs>;

  /**
   * `prisma.push_notifications`: Exposes CRUD operations for the **push_notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Push_notifications
    * const push_notifications = await prisma.push_notifications.findMany()
    * ```
    */
  get push_notifications(): Prisma.push_notificationsDelegate<ExtArgs>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs>;

  /**
   * `prisma.watched_callsigns`: Exposes CRUD operations for the **watched_callsigns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watched_callsigns
    * const watched_callsigns = await prisma.watched_callsigns.findMany()
    * ```
    */
  get watched_callsigns(): Prisma.watched_callsignsDelegate<ExtArgs>;

  /**
   * `prisma.ignored_cids`: Exposes CRUD operations for the **ignored_cids** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ignored_cids
    * const ignored_cids = await prisma.ignored_cids.findMany()
    * ```
    */
  get ignored_cids(): Prisma.ignored_cidsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    discord_notifications: 'discord_notifications',
    push_notifications: 'push_notifications',
    sessions: 'sessions',
    watched_callsigns: 'watched_callsigns',
    ignored_cids: 'ignored_cids'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'discord_notifications' | 'push_notifications' | 'sessions' | 'watched_callsigns' | 'ignored_cids'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      discord_notifications: {
        payload: Prisma.$discord_notificationsPayload<ExtArgs>
        fields: Prisma.discord_notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.discord_notificationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.discord_notificationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload>
          }
          findFirst: {
            args: Prisma.discord_notificationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.discord_notificationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload>
          }
          findMany: {
            args: Prisma.discord_notificationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload>[]
          }
          create: {
            args: Prisma.discord_notificationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload>
          }
          createMany: {
            args: Prisma.discord_notificationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.discord_notificationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload>
          }
          update: {
            args: Prisma.discord_notificationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload>
          }
          deleteMany: {
            args: Prisma.discord_notificationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.discord_notificationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.discord_notificationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discord_notificationsPayload>
          }
          aggregate: {
            args: Prisma.Discord_notificationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiscord_notifications>
          }
          groupBy: {
            args: Prisma.discord_notificationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Discord_notificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.discord_notificationsCountArgs<ExtArgs>,
            result: $Utils.Optional<Discord_notificationsCountAggregateOutputType> | number
          }
        }
      }
      push_notifications: {
        payload: Prisma.$push_notificationsPayload<ExtArgs>
        fields: Prisma.push_notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.push_notificationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.push_notificationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload>
          }
          findFirst: {
            args: Prisma.push_notificationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.push_notificationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload>
          }
          findMany: {
            args: Prisma.push_notificationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload>[]
          }
          create: {
            args: Prisma.push_notificationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload>
          }
          createMany: {
            args: Prisma.push_notificationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.push_notificationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload>
          }
          update: {
            args: Prisma.push_notificationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload>
          }
          deleteMany: {
            args: Prisma.push_notificationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.push_notificationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.push_notificationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$push_notificationsPayload>
          }
          aggregate: {
            args: Prisma.Push_notificationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePush_notifications>
          }
          groupBy: {
            args: Prisma.push_notificationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Push_notificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.push_notificationsCountArgs<ExtArgs>,
            result: $Utils.Optional<Push_notificationsCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      watched_callsigns: {
        payload: Prisma.$watched_callsignsPayload<ExtArgs>
        fields: Prisma.watched_callsignsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.watched_callsignsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.watched_callsignsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload>
          }
          findFirst: {
            args: Prisma.watched_callsignsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.watched_callsignsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload>
          }
          findMany: {
            args: Prisma.watched_callsignsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload>[]
          }
          create: {
            args: Prisma.watched_callsignsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload>
          }
          createMany: {
            args: Prisma.watched_callsignsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.watched_callsignsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload>
          }
          update: {
            args: Prisma.watched_callsignsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload>
          }
          deleteMany: {
            args: Prisma.watched_callsignsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.watched_callsignsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.watched_callsignsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watched_callsignsPayload>
          }
          aggregate: {
            args: Prisma.Watched_callsignsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWatched_callsigns>
          }
          groupBy: {
            args: Prisma.watched_callsignsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Watched_callsignsGroupByOutputType>[]
          }
          count: {
            args: Prisma.watched_callsignsCountArgs<ExtArgs>,
            result: $Utils.Optional<Watched_callsignsCountAggregateOutputType> | number
          }
        }
      }
      ignored_cids: {
        payload: Prisma.$ignored_cidsPayload<ExtArgs>
        fields: Prisma.ignored_cidsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ignored_cidsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ignored_cidsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload>
          }
          findFirst: {
            args: Prisma.ignored_cidsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ignored_cidsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload>
          }
          findMany: {
            args: Prisma.ignored_cidsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload>[]
          }
          create: {
            args: Prisma.ignored_cidsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload>
          }
          createMany: {
            args: Prisma.ignored_cidsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ignored_cidsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload>
          }
          update: {
            args: Prisma.ignored_cidsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload>
          }
          deleteMany: {
            args: Prisma.ignored_cidsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ignored_cidsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ignored_cidsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ignored_cidsPayload>
          }
          aggregate: {
            args: Prisma.Ignored_cidsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIgnored_cids>
          }
          groupBy: {
            args: Prisma.ignored_cidsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Ignored_cidsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ignored_cidsCountArgs<ExtArgs>,
            result: $Utils.Optional<Ignored_cidsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model discord_notifications
   */

  export type AggregateDiscord_notifications = {
    _count: Discord_notificationsCountAggregateOutputType | null
    _avg: Discord_notificationsAvgAggregateOutputType | null
    _sum: Discord_notificationsSumAggregateOutputType | null
    _min: Discord_notificationsMinAggregateOutputType | null
    _max: Discord_notificationsMaxAggregateOutputType | null
  }

  export type Discord_notificationsAvgAggregateOutputType = {
    id: number | null
    cid: number | null
  }

  export type Discord_notificationsSumAggregateOutputType = {
    id: number | null
    cid: number | null
  }

  export type Discord_notificationsMinAggregateOutputType = {
    id: number | null
    cid: number | null
    webhook_url: string | null
  }

  export type Discord_notificationsMaxAggregateOutputType = {
    id: number | null
    cid: number | null
    webhook_url: string | null
  }

  export type Discord_notificationsCountAggregateOutputType = {
    id: number
    cid: number
    webhook_url: number
    _all: number
  }


  export type Discord_notificationsAvgAggregateInputType = {
    id?: true
    cid?: true
  }

  export type Discord_notificationsSumAggregateInputType = {
    id?: true
    cid?: true
  }

  export type Discord_notificationsMinAggregateInputType = {
    id?: true
    cid?: true
    webhook_url?: true
  }

  export type Discord_notificationsMaxAggregateInputType = {
    id?: true
    cid?: true
    webhook_url?: true
  }

  export type Discord_notificationsCountAggregateInputType = {
    id?: true
    cid?: true
    webhook_url?: true
    _all?: true
  }

  export type Discord_notificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discord_notifications to aggregate.
     */
    where?: discord_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discord_notifications to fetch.
     */
    orderBy?: discord_notificationsOrderByWithRelationInput | discord_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: discord_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discord_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discord_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned discord_notifications
    **/
    _count?: true | Discord_notificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Discord_notificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Discord_notificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Discord_notificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Discord_notificationsMaxAggregateInputType
  }

  export type GetDiscord_notificationsAggregateType<T extends Discord_notificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscord_notifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscord_notifications[P]>
      : GetScalarType<T[P], AggregateDiscord_notifications[P]>
  }




  export type discord_notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discord_notificationsWhereInput
    orderBy?: discord_notificationsOrderByWithAggregationInput | discord_notificationsOrderByWithAggregationInput[]
    by: Discord_notificationsScalarFieldEnum[] | Discord_notificationsScalarFieldEnum
    having?: discord_notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Discord_notificationsCountAggregateInputType | true
    _avg?: Discord_notificationsAvgAggregateInputType
    _sum?: Discord_notificationsSumAggregateInputType
    _min?: Discord_notificationsMinAggregateInputType
    _max?: Discord_notificationsMaxAggregateInputType
  }

  export type Discord_notificationsGroupByOutputType = {
    id: number
    cid: number
    webhook_url: string
    _count: Discord_notificationsCountAggregateOutputType | null
    _avg: Discord_notificationsAvgAggregateOutputType | null
    _sum: Discord_notificationsSumAggregateOutputType | null
    _min: Discord_notificationsMinAggregateOutputType | null
    _max: Discord_notificationsMaxAggregateOutputType | null
  }

  type GetDiscord_notificationsGroupByPayload<T extends discord_notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Discord_notificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Discord_notificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Discord_notificationsGroupByOutputType[P]>
            : GetScalarType<T[P], Discord_notificationsGroupByOutputType[P]>
        }
      >
    >


  export type discord_notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cid?: boolean
    webhook_url?: boolean
  }, ExtArgs["result"]["discord_notifications"]>


  export type discord_notificationsSelectScalar = {
    id?: boolean
    cid?: boolean
    webhook_url?: boolean
  }


  export type $discord_notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "discord_notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cid: number
      webhook_url: string
    }, ExtArgs["result"]["discord_notifications"]>
    composites: {}
  }

  type discord_notificationsGetPayload<S extends boolean | null | undefined | discord_notificationsDefaultArgs> = $Result.GetResult<Prisma.$discord_notificationsPayload, S>

  type discord_notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<discord_notificationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Discord_notificationsCountAggregateInputType | true
    }

  export interface discord_notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['discord_notifications'], meta: { name: 'discord_notifications' } }
    /**
     * Find zero or one Discord_notifications that matches the filter.
     * @param {discord_notificationsFindUniqueArgs} args - Arguments to find a Discord_notifications
     * @example
     * // Get one Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends discord_notificationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, discord_notificationsFindUniqueArgs<ExtArgs>>
    ): Prisma__discord_notificationsClient<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Discord_notifications that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {discord_notificationsFindUniqueOrThrowArgs} args - Arguments to find a Discord_notifications
     * @example
     * // Get one Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends discord_notificationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, discord_notificationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__discord_notificationsClient<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Discord_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discord_notificationsFindFirstArgs} args - Arguments to find a Discord_notifications
     * @example
     * // Get one Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends discord_notificationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, discord_notificationsFindFirstArgs<ExtArgs>>
    ): Prisma__discord_notificationsClient<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Discord_notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discord_notificationsFindFirstOrThrowArgs} args - Arguments to find a Discord_notifications
     * @example
     * // Get one Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends discord_notificationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, discord_notificationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__discord_notificationsClient<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Discord_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discord_notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.findMany()
     * 
     * // Get first 10 Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discord_notificationsWithIdOnly = await prisma.discord_notifications.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends discord_notificationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discord_notificationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Discord_notifications.
     * @param {discord_notificationsCreateArgs} args - Arguments to create a Discord_notifications.
     * @example
     * // Create one Discord_notifications
     * const Discord_notifications = await prisma.discord_notifications.create({
     *   data: {
     *     // ... data to create a Discord_notifications
     *   }
     * })
     * 
    **/
    create<T extends discord_notificationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, discord_notificationsCreateArgs<ExtArgs>>
    ): Prisma__discord_notificationsClient<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Discord_notifications.
     * @param {discord_notificationsCreateManyArgs} args - Arguments to create many Discord_notifications.
     * @example
     * // Create many Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends discord_notificationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discord_notificationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Discord_notifications.
     * @param {discord_notificationsDeleteArgs} args - Arguments to delete one Discord_notifications.
     * @example
     * // Delete one Discord_notifications
     * const Discord_notifications = await prisma.discord_notifications.delete({
     *   where: {
     *     // ... filter to delete one Discord_notifications
     *   }
     * })
     * 
    **/
    delete<T extends discord_notificationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, discord_notificationsDeleteArgs<ExtArgs>>
    ): Prisma__discord_notificationsClient<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Discord_notifications.
     * @param {discord_notificationsUpdateArgs} args - Arguments to update one Discord_notifications.
     * @example
     * // Update one Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends discord_notificationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, discord_notificationsUpdateArgs<ExtArgs>>
    ): Prisma__discord_notificationsClient<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Discord_notifications.
     * @param {discord_notificationsDeleteManyArgs} args - Arguments to filter Discord_notifications to delete.
     * @example
     * // Delete a few Discord_notifications
     * const { count } = await prisma.discord_notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends discord_notificationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discord_notificationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discord_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discord_notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends discord_notificationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, discord_notificationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discord_notifications.
     * @param {discord_notificationsUpsertArgs} args - Arguments to update or create a Discord_notifications.
     * @example
     * // Update or create a Discord_notifications
     * const discord_notifications = await prisma.discord_notifications.upsert({
     *   create: {
     *     // ... data to create a Discord_notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discord_notifications we want to update
     *   }
     * })
    **/
    upsert<T extends discord_notificationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, discord_notificationsUpsertArgs<ExtArgs>>
    ): Prisma__discord_notificationsClient<$Result.GetResult<Prisma.$discord_notificationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Discord_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discord_notificationsCountArgs} args - Arguments to filter Discord_notifications to count.
     * @example
     * // Count the number of Discord_notifications
     * const count = await prisma.discord_notifications.count({
     *   where: {
     *     // ... the filter for the Discord_notifications we want to count
     *   }
     * })
    **/
    count<T extends discord_notificationsCountArgs>(
      args?: Subset<T, discord_notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Discord_notificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discord_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discord_notificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Discord_notificationsAggregateArgs>(args: Subset<T, Discord_notificationsAggregateArgs>): Prisma.PrismaPromise<GetDiscord_notificationsAggregateType<T>>

    /**
     * Group by Discord_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discord_notificationsGroupByArgs} args - Group by arguments.
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
      T extends discord_notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: discord_notificationsGroupByArgs['orderBy'] }
        : { orderBy?: discord_notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, discord_notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscord_notificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the discord_notifications model
   */
  readonly fields: discord_notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for discord_notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__discord_notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the discord_notifications model
   */ 
  interface discord_notificationsFieldRefs {
    readonly id: FieldRef<"discord_notifications", 'Int'>
    readonly cid: FieldRef<"discord_notifications", 'Int'>
    readonly webhook_url: FieldRef<"discord_notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * discord_notifications findUnique
   */
  export type discord_notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which discord_notifications to fetch.
     */
    where: discord_notificationsWhereUniqueInput
  }

  /**
   * discord_notifications findUniqueOrThrow
   */
  export type discord_notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which discord_notifications to fetch.
     */
    where: discord_notificationsWhereUniqueInput
  }

  /**
   * discord_notifications findFirst
   */
  export type discord_notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which discord_notifications to fetch.
     */
    where?: discord_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discord_notifications to fetch.
     */
    orderBy?: discord_notificationsOrderByWithRelationInput | discord_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discord_notifications.
     */
    cursor?: discord_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discord_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discord_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discord_notifications.
     */
    distinct?: Discord_notificationsScalarFieldEnum | Discord_notificationsScalarFieldEnum[]
  }

  /**
   * discord_notifications findFirstOrThrow
   */
  export type discord_notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which discord_notifications to fetch.
     */
    where?: discord_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discord_notifications to fetch.
     */
    orderBy?: discord_notificationsOrderByWithRelationInput | discord_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discord_notifications.
     */
    cursor?: discord_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discord_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discord_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discord_notifications.
     */
    distinct?: Discord_notificationsScalarFieldEnum | Discord_notificationsScalarFieldEnum[]
  }

  /**
   * discord_notifications findMany
   */
  export type discord_notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which discord_notifications to fetch.
     */
    where?: discord_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discord_notifications to fetch.
     */
    orderBy?: discord_notificationsOrderByWithRelationInput | discord_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing discord_notifications.
     */
    cursor?: discord_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discord_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discord_notifications.
     */
    skip?: number
    distinct?: Discord_notificationsScalarFieldEnum | Discord_notificationsScalarFieldEnum[]
  }

  /**
   * discord_notifications create
   */
  export type discord_notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * The data needed to create a discord_notifications.
     */
    data: XOR<discord_notificationsCreateInput, discord_notificationsUncheckedCreateInput>
  }

  /**
   * discord_notifications createMany
   */
  export type discord_notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many discord_notifications.
     */
    data: discord_notificationsCreateManyInput | discord_notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * discord_notifications update
   */
  export type discord_notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * The data needed to update a discord_notifications.
     */
    data: XOR<discord_notificationsUpdateInput, discord_notificationsUncheckedUpdateInput>
    /**
     * Choose, which discord_notifications to update.
     */
    where: discord_notificationsWhereUniqueInput
  }

  /**
   * discord_notifications updateMany
   */
  export type discord_notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update discord_notifications.
     */
    data: XOR<discord_notificationsUpdateManyMutationInput, discord_notificationsUncheckedUpdateManyInput>
    /**
     * Filter which discord_notifications to update
     */
    where?: discord_notificationsWhereInput
  }

  /**
   * discord_notifications upsert
   */
  export type discord_notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * The filter to search for the discord_notifications to update in case it exists.
     */
    where: discord_notificationsWhereUniqueInput
    /**
     * In case the discord_notifications found by the `where` argument doesn't exist, create a new discord_notifications with this data.
     */
    create: XOR<discord_notificationsCreateInput, discord_notificationsUncheckedCreateInput>
    /**
     * In case the discord_notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<discord_notificationsUpdateInput, discord_notificationsUncheckedUpdateInput>
  }

  /**
   * discord_notifications delete
   */
  export type discord_notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
    /**
     * Filter which discord_notifications to delete.
     */
    where: discord_notificationsWhereUniqueInput
  }

  /**
   * discord_notifications deleteMany
   */
  export type discord_notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discord_notifications to delete
     */
    where?: discord_notificationsWhereInput
  }

  /**
   * discord_notifications without action
   */
  export type discord_notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discord_notifications
     */
    select?: discord_notificationsSelect<ExtArgs> | null
  }


  /**
   * Model push_notifications
   */

  export type AggregatePush_notifications = {
    _count: Push_notificationsCountAggregateOutputType | null
    _avg: Push_notificationsAvgAggregateOutputType | null
    _sum: Push_notificationsSumAggregateOutputType | null
    _min: Push_notificationsMinAggregateOutputType | null
    _max: Push_notificationsMaxAggregateOutputType | null
  }

  export type Push_notificationsAvgAggregateOutputType = {
    id: number | null
    cid: number | null
    expiration_time: number | null
  }

  export type Push_notificationsSumAggregateOutputType = {
    id: number | null
    cid: number | null
    expiration_time: bigint | null
  }

  export type Push_notificationsMinAggregateOutputType = {
    id: number | null
    cid: number | null
    endpoint: string | null
    expiration_time: bigint | null
    p256dh: string | null
    auth: string | null
  }

  export type Push_notificationsMaxAggregateOutputType = {
    id: number | null
    cid: number | null
    endpoint: string | null
    expiration_time: bigint | null
    p256dh: string | null
    auth: string | null
  }

  export type Push_notificationsCountAggregateOutputType = {
    id: number
    cid: number
    endpoint: number
    expiration_time: number
    p256dh: number
    auth: number
    _all: number
  }


  export type Push_notificationsAvgAggregateInputType = {
    id?: true
    cid?: true
    expiration_time?: true
  }

  export type Push_notificationsSumAggregateInputType = {
    id?: true
    cid?: true
    expiration_time?: true
  }

  export type Push_notificationsMinAggregateInputType = {
    id?: true
    cid?: true
    endpoint?: true
    expiration_time?: true
    p256dh?: true
    auth?: true
  }

  export type Push_notificationsMaxAggregateInputType = {
    id?: true
    cid?: true
    endpoint?: true
    expiration_time?: true
    p256dh?: true
    auth?: true
  }

  export type Push_notificationsCountAggregateInputType = {
    id?: true
    cid?: true
    endpoint?: true
    expiration_time?: true
    p256dh?: true
    auth?: true
    _all?: true
  }

  export type Push_notificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which push_notifications to aggregate.
     */
    where?: push_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_notifications to fetch.
     */
    orderBy?: push_notificationsOrderByWithRelationInput | push_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: push_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned push_notifications
    **/
    _count?: true | Push_notificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Push_notificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Push_notificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Push_notificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Push_notificationsMaxAggregateInputType
  }

  export type GetPush_notificationsAggregateType<T extends Push_notificationsAggregateArgs> = {
        [P in keyof T & keyof AggregatePush_notifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePush_notifications[P]>
      : GetScalarType<T[P], AggregatePush_notifications[P]>
  }




  export type push_notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: push_notificationsWhereInput
    orderBy?: push_notificationsOrderByWithAggregationInput | push_notificationsOrderByWithAggregationInput[]
    by: Push_notificationsScalarFieldEnum[] | Push_notificationsScalarFieldEnum
    having?: push_notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Push_notificationsCountAggregateInputType | true
    _avg?: Push_notificationsAvgAggregateInputType
    _sum?: Push_notificationsSumAggregateInputType
    _min?: Push_notificationsMinAggregateInputType
    _max?: Push_notificationsMaxAggregateInputType
  }

  export type Push_notificationsGroupByOutputType = {
    id: number
    cid: number
    endpoint: string
    expiration_time: bigint | null
    p256dh: string
    auth: string
    _count: Push_notificationsCountAggregateOutputType | null
    _avg: Push_notificationsAvgAggregateOutputType | null
    _sum: Push_notificationsSumAggregateOutputType | null
    _min: Push_notificationsMinAggregateOutputType | null
    _max: Push_notificationsMaxAggregateOutputType | null
  }

  type GetPush_notificationsGroupByPayload<T extends push_notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Push_notificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Push_notificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Push_notificationsGroupByOutputType[P]>
            : GetScalarType<T[P], Push_notificationsGroupByOutputType[P]>
        }
      >
    >


  export type push_notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cid?: boolean
    endpoint?: boolean
    expiration_time?: boolean
    p256dh?: boolean
    auth?: boolean
  }, ExtArgs["result"]["push_notifications"]>


  export type push_notificationsSelectScalar = {
    id?: boolean
    cid?: boolean
    endpoint?: boolean
    expiration_time?: boolean
    p256dh?: boolean
    auth?: boolean
  }


  export type $push_notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "push_notifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cid: number
      endpoint: string
      expiration_time: bigint | null
      p256dh: string
      auth: string
    }, ExtArgs["result"]["push_notifications"]>
    composites: {}
  }

  type push_notificationsGetPayload<S extends boolean | null | undefined | push_notificationsDefaultArgs> = $Result.GetResult<Prisma.$push_notificationsPayload, S>

  type push_notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<push_notificationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Push_notificationsCountAggregateInputType | true
    }

  export interface push_notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['push_notifications'], meta: { name: 'push_notifications' } }
    /**
     * Find zero or one Push_notifications that matches the filter.
     * @param {push_notificationsFindUniqueArgs} args - Arguments to find a Push_notifications
     * @example
     * // Get one Push_notifications
     * const push_notifications = await prisma.push_notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends push_notificationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, push_notificationsFindUniqueArgs<ExtArgs>>
    ): Prisma__push_notificationsClient<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Push_notifications that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {push_notificationsFindUniqueOrThrowArgs} args - Arguments to find a Push_notifications
     * @example
     * // Get one Push_notifications
     * const push_notifications = await prisma.push_notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends push_notificationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, push_notificationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__push_notificationsClient<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Push_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_notificationsFindFirstArgs} args - Arguments to find a Push_notifications
     * @example
     * // Get one Push_notifications
     * const push_notifications = await prisma.push_notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends push_notificationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, push_notificationsFindFirstArgs<ExtArgs>>
    ): Prisma__push_notificationsClient<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Push_notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_notificationsFindFirstOrThrowArgs} args - Arguments to find a Push_notifications
     * @example
     * // Get one Push_notifications
     * const push_notifications = await prisma.push_notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends push_notificationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, push_notificationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__push_notificationsClient<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Push_notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Push_notifications
     * const push_notifications = await prisma.push_notifications.findMany()
     * 
     * // Get first 10 Push_notifications
     * const push_notifications = await prisma.push_notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const push_notificationsWithIdOnly = await prisma.push_notifications.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends push_notificationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, push_notificationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Push_notifications.
     * @param {push_notificationsCreateArgs} args - Arguments to create a Push_notifications.
     * @example
     * // Create one Push_notifications
     * const Push_notifications = await prisma.push_notifications.create({
     *   data: {
     *     // ... data to create a Push_notifications
     *   }
     * })
     * 
    **/
    create<T extends push_notificationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, push_notificationsCreateArgs<ExtArgs>>
    ): Prisma__push_notificationsClient<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Push_notifications.
     * @param {push_notificationsCreateManyArgs} args - Arguments to create many Push_notifications.
     * @example
     * // Create many Push_notifications
     * const push_notifications = await prisma.push_notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends push_notificationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, push_notificationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Push_notifications.
     * @param {push_notificationsDeleteArgs} args - Arguments to delete one Push_notifications.
     * @example
     * // Delete one Push_notifications
     * const Push_notifications = await prisma.push_notifications.delete({
     *   where: {
     *     // ... filter to delete one Push_notifications
     *   }
     * })
     * 
    **/
    delete<T extends push_notificationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, push_notificationsDeleteArgs<ExtArgs>>
    ): Prisma__push_notificationsClient<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Push_notifications.
     * @param {push_notificationsUpdateArgs} args - Arguments to update one Push_notifications.
     * @example
     * // Update one Push_notifications
     * const push_notifications = await prisma.push_notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends push_notificationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, push_notificationsUpdateArgs<ExtArgs>>
    ): Prisma__push_notificationsClient<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Push_notifications.
     * @param {push_notificationsDeleteManyArgs} args - Arguments to filter Push_notifications to delete.
     * @example
     * // Delete a few Push_notifications
     * const { count } = await prisma.push_notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends push_notificationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, push_notificationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Push_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Push_notifications
     * const push_notifications = await prisma.push_notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends push_notificationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, push_notificationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Push_notifications.
     * @param {push_notificationsUpsertArgs} args - Arguments to update or create a Push_notifications.
     * @example
     * // Update or create a Push_notifications
     * const push_notifications = await prisma.push_notifications.upsert({
     *   create: {
     *     // ... data to create a Push_notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Push_notifications we want to update
     *   }
     * })
    **/
    upsert<T extends push_notificationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, push_notificationsUpsertArgs<ExtArgs>>
    ): Prisma__push_notificationsClient<$Result.GetResult<Prisma.$push_notificationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Push_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_notificationsCountArgs} args - Arguments to filter Push_notifications to count.
     * @example
     * // Count the number of Push_notifications
     * const count = await prisma.push_notifications.count({
     *   where: {
     *     // ... the filter for the Push_notifications we want to count
     *   }
     * })
    **/
    count<T extends push_notificationsCountArgs>(
      args?: Subset<T, push_notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Push_notificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Push_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Push_notificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Push_notificationsAggregateArgs>(args: Subset<T, Push_notificationsAggregateArgs>): Prisma.PrismaPromise<GetPush_notificationsAggregateType<T>>

    /**
     * Group by Push_notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_notificationsGroupByArgs} args - Group by arguments.
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
      T extends push_notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: push_notificationsGroupByArgs['orderBy'] }
        : { orderBy?: push_notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, push_notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPush_notificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the push_notifications model
   */
  readonly fields: push_notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for push_notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__push_notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the push_notifications model
   */ 
  interface push_notificationsFieldRefs {
    readonly id: FieldRef<"push_notifications", 'Int'>
    readonly cid: FieldRef<"push_notifications", 'Int'>
    readonly endpoint: FieldRef<"push_notifications", 'String'>
    readonly expiration_time: FieldRef<"push_notifications", 'BigInt'>
    readonly p256dh: FieldRef<"push_notifications", 'String'>
    readonly auth: FieldRef<"push_notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * push_notifications findUnique
   */
  export type push_notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which push_notifications to fetch.
     */
    where: push_notificationsWhereUniqueInput
  }

  /**
   * push_notifications findUniqueOrThrow
   */
  export type push_notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which push_notifications to fetch.
     */
    where: push_notificationsWhereUniqueInput
  }

  /**
   * push_notifications findFirst
   */
  export type push_notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which push_notifications to fetch.
     */
    where?: push_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_notifications to fetch.
     */
    orderBy?: push_notificationsOrderByWithRelationInput | push_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for push_notifications.
     */
    cursor?: push_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of push_notifications.
     */
    distinct?: Push_notificationsScalarFieldEnum | Push_notificationsScalarFieldEnum[]
  }

  /**
   * push_notifications findFirstOrThrow
   */
  export type push_notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which push_notifications to fetch.
     */
    where?: push_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_notifications to fetch.
     */
    orderBy?: push_notificationsOrderByWithRelationInput | push_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for push_notifications.
     */
    cursor?: push_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of push_notifications.
     */
    distinct?: Push_notificationsScalarFieldEnum | Push_notificationsScalarFieldEnum[]
  }

  /**
   * push_notifications findMany
   */
  export type push_notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * Filter, which push_notifications to fetch.
     */
    where?: push_notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_notifications to fetch.
     */
    orderBy?: push_notificationsOrderByWithRelationInput | push_notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing push_notifications.
     */
    cursor?: push_notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_notifications.
     */
    skip?: number
    distinct?: Push_notificationsScalarFieldEnum | Push_notificationsScalarFieldEnum[]
  }

  /**
   * push_notifications create
   */
  export type push_notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * The data needed to create a push_notifications.
     */
    data: XOR<push_notificationsCreateInput, push_notificationsUncheckedCreateInput>
  }

  /**
   * push_notifications createMany
   */
  export type push_notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many push_notifications.
     */
    data: push_notificationsCreateManyInput | push_notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * push_notifications update
   */
  export type push_notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * The data needed to update a push_notifications.
     */
    data: XOR<push_notificationsUpdateInput, push_notificationsUncheckedUpdateInput>
    /**
     * Choose, which push_notifications to update.
     */
    where: push_notificationsWhereUniqueInput
  }

  /**
   * push_notifications updateMany
   */
  export type push_notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update push_notifications.
     */
    data: XOR<push_notificationsUpdateManyMutationInput, push_notificationsUncheckedUpdateManyInput>
    /**
     * Filter which push_notifications to update
     */
    where?: push_notificationsWhereInput
  }

  /**
   * push_notifications upsert
   */
  export type push_notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * The filter to search for the push_notifications to update in case it exists.
     */
    where: push_notificationsWhereUniqueInput
    /**
     * In case the push_notifications found by the `where` argument doesn't exist, create a new push_notifications with this data.
     */
    create: XOR<push_notificationsCreateInput, push_notificationsUncheckedCreateInput>
    /**
     * In case the push_notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<push_notificationsUpdateInput, push_notificationsUncheckedUpdateInput>
  }

  /**
   * push_notifications delete
   */
  export type push_notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
    /**
     * Filter which push_notifications to delete.
     */
    where: push_notificationsWhereUniqueInput
  }

  /**
   * push_notifications deleteMany
   */
  export type push_notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which push_notifications to delete
     */
    where?: push_notificationsWhereInput
  }

  /**
   * push_notifications without action
   */
  export type push_notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_notifications
     */
    select?: push_notificationsSelect<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    session_id: string | null
    access_token: string | null
    refresh_token: string | null
    created_at: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    session_id: string | null
    access_token: string | null
    refresh_token: string | null
    created_at: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    session_id: number
    access_token: number
    refresh_token: number
    created_at: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    session_id?: true
    access_token?: true
    refresh_token?: true
    created_at?: true
  }

  export type SessionsMaxAggregateInputType = {
    session_id?: true
    access_token?: true
    refresh_token?: true
    created_at?: true
  }

  export type SessionsCountAggregateInputType = {
    session_id?: true
    access_token?: true
    refresh_token?: true
    created_at?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    session_id: string
    access_token: string
    refresh_token: string
    created_at: Date
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["sessions"]>


  export type sessionsSelectScalar = {
    session_id?: boolean
    access_token?: boolean
    refresh_token?: boolean
    created_at?: boolean
  }


  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      session_id: string
      access_token: string
      refresh_token: string
      created_at: Date
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sessionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sessionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.findMany({ select: { session_id: true } })
     * 
    **/
    findMany<T extends sessionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
    **/
    create<T extends sessionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends sessionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
    **/
    delete<T extends sessionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sessionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sessionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sessionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
    **/
    upsert<T extends sessionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>
    ): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the sessions model
   */ 
  interface sessionsFieldRefs {
    readonly session_id: FieldRef<"sessions", 'String'>
    readonly access_token: FieldRef<"sessions", 'String'>
    readonly refresh_token: FieldRef<"sessions", 'String'>
    readonly created_at: FieldRef<"sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
  }


  /**
   * Model watched_callsigns
   */

  export type AggregateWatched_callsigns = {
    _count: Watched_callsignsCountAggregateOutputType | null
    _avg: Watched_callsignsAvgAggregateOutputType | null
    _sum: Watched_callsignsSumAggregateOutputType | null
    _min: Watched_callsignsMinAggregateOutputType | null
    _max: Watched_callsignsMaxAggregateOutputType | null
  }

  export type Watched_callsignsAvgAggregateOutputType = {
    id: number | null
    cid: number | null
  }

  export type Watched_callsignsSumAggregateOutputType = {
    id: number | null
    cid: number | null
  }

  export type Watched_callsignsMinAggregateOutputType = {
    id: number | null
    cid: number | null
    callsign: string | null
    topdown: boolean | null
  }

  export type Watched_callsignsMaxAggregateOutputType = {
    id: number | null
    cid: number | null
    callsign: string | null
    topdown: boolean | null
  }

  export type Watched_callsignsCountAggregateOutputType = {
    id: number
    cid: number
    callsign: number
    topdown: number
    _all: number
  }


  export type Watched_callsignsAvgAggregateInputType = {
    id?: true
    cid?: true
  }

  export type Watched_callsignsSumAggregateInputType = {
    id?: true
    cid?: true
  }

  export type Watched_callsignsMinAggregateInputType = {
    id?: true
    cid?: true
    callsign?: true
    topdown?: true
  }

  export type Watched_callsignsMaxAggregateInputType = {
    id?: true
    cid?: true
    callsign?: true
    topdown?: true
  }

  export type Watched_callsignsCountAggregateInputType = {
    id?: true
    cid?: true
    callsign?: true
    topdown?: true
    _all?: true
  }

  export type Watched_callsignsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which watched_callsigns to aggregate.
     */
    where?: watched_callsignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watched_callsigns to fetch.
     */
    orderBy?: watched_callsignsOrderByWithRelationInput | watched_callsignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: watched_callsignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watched_callsigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watched_callsigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned watched_callsigns
    **/
    _count?: true | Watched_callsignsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Watched_callsignsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Watched_callsignsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Watched_callsignsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Watched_callsignsMaxAggregateInputType
  }

  export type GetWatched_callsignsAggregateType<T extends Watched_callsignsAggregateArgs> = {
        [P in keyof T & keyof AggregateWatched_callsigns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatched_callsigns[P]>
      : GetScalarType<T[P], AggregateWatched_callsigns[P]>
  }




  export type watched_callsignsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: watched_callsignsWhereInput
    orderBy?: watched_callsignsOrderByWithAggregationInput | watched_callsignsOrderByWithAggregationInput[]
    by: Watched_callsignsScalarFieldEnum[] | Watched_callsignsScalarFieldEnum
    having?: watched_callsignsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Watched_callsignsCountAggregateInputType | true
    _avg?: Watched_callsignsAvgAggregateInputType
    _sum?: Watched_callsignsSumAggregateInputType
    _min?: Watched_callsignsMinAggregateInputType
    _max?: Watched_callsignsMaxAggregateInputType
  }

  export type Watched_callsignsGroupByOutputType = {
    id: number
    cid: number
    callsign: string
    topdown: boolean
    _count: Watched_callsignsCountAggregateOutputType | null
    _avg: Watched_callsignsAvgAggregateOutputType | null
    _sum: Watched_callsignsSumAggregateOutputType | null
    _min: Watched_callsignsMinAggregateOutputType | null
    _max: Watched_callsignsMaxAggregateOutputType | null
  }

  type GetWatched_callsignsGroupByPayload<T extends watched_callsignsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Watched_callsignsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Watched_callsignsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Watched_callsignsGroupByOutputType[P]>
            : GetScalarType<T[P], Watched_callsignsGroupByOutputType[P]>
        }
      >
    >


  export type watched_callsignsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cid?: boolean
    callsign?: boolean
    topdown?: boolean
  }, ExtArgs["result"]["watched_callsigns"]>


  export type watched_callsignsSelectScalar = {
    id?: boolean
    cid?: boolean
    callsign?: boolean
    topdown?: boolean
  }


  export type $watched_callsignsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "watched_callsigns"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cid: number
      callsign: string
      topdown: boolean
    }, ExtArgs["result"]["watched_callsigns"]>
    composites: {}
  }

  type watched_callsignsGetPayload<S extends boolean | null | undefined | watched_callsignsDefaultArgs> = $Result.GetResult<Prisma.$watched_callsignsPayload, S>

  type watched_callsignsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<watched_callsignsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Watched_callsignsCountAggregateInputType | true
    }

  export interface watched_callsignsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['watched_callsigns'], meta: { name: 'watched_callsigns' } }
    /**
     * Find zero or one Watched_callsigns that matches the filter.
     * @param {watched_callsignsFindUniqueArgs} args - Arguments to find a Watched_callsigns
     * @example
     * // Get one Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends watched_callsignsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, watched_callsignsFindUniqueArgs<ExtArgs>>
    ): Prisma__watched_callsignsClient<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Watched_callsigns that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {watched_callsignsFindUniqueOrThrowArgs} args - Arguments to find a Watched_callsigns
     * @example
     * // Get one Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends watched_callsignsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, watched_callsignsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__watched_callsignsClient<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Watched_callsigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watched_callsignsFindFirstArgs} args - Arguments to find a Watched_callsigns
     * @example
     * // Get one Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends watched_callsignsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, watched_callsignsFindFirstArgs<ExtArgs>>
    ): Prisma__watched_callsignsClient<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Watched_callsigns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watched_callsignsFindFirstOrThrowArgs} args - Arguments to find a Watched_callsigns
     * @example
     * // Get one Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends watched_callsignsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, watched_callsignsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__watched_callsignsClient<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Watched_callsigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watched_callsignsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.findMany()
     * 
     * // Get first 10 Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watched_callsignsWithIdOnly = await prisma.watched_callsigns.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends watched_callsignsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watched_callsignsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Watched_callsigns.
     * @param {watched_callsignsCreateArgs} args - Arguments to create a Watched_callsigns.
     * @example
     * // Create one Watched_callsigns
     * const Watched_callsigns = await prisma.watched_callsigns.create({
     *   data: {
     *     // ... data to create a Watched_callsigns
     *   }
     * })
     * 
    **/
    create<T extends watched_callsignsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, watched_callsignsCreateArgs<ExtArgs>>
    ): Prisma__watched_callsignsClient<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Watched_callsigns.
     * @param {watched_callsignsCreateManyArgs} args - Arguments to create many Watched_callsigns.
     * @example
     * // Create many Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends watched_callsignsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watched_callsignsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Watched_callsigns.
     * @param {watched_callsignsDeleteArgs} args - Arguments to delete one Watched_callsigns.
     * @example
     * // Delete one Watched_callsigns
     * const Watched_callsigns = await prisma.watched_callsigns.delete({
     *   where: {
     *     // ... filter to delete one Watched_callsigns
     *   }
     * })
     * 
    **/
    delete<T extends watched_callsignsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, watched_callsignsDeleteArgs<ExtArgs>>
    ): Prisma__watched_callsignsClient<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Watched_callsigns.
     * @param {watched_callsignsUpdateArgs} args - Arguments to update one Watched_callsigns.
     * @example
     * // Update one Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends watched_callsignsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, watched_callsignsUpdateArgs<ExtArgs>>
    ): Prisma__watched_callsignsClient<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Watched_callsigns.
     * @param {watched_callsignsDeleteManyArgs} args - Arguments to filter Watched_callsigns to delete.
     * @example
     * // Delete a few Watched_callsigns
     * const { count } = await prisma.watched_callsigns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends watched_callsignsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watched_callsignsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watched_callsigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watched_callsignsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends watched_callsignsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, watched_callsignsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Watched_callsigns.
     * @param {watched_callsignsUpsertArgs} args - Arguments to update or create a Watched_callsigns.
     * @example
     * // Update or create a Watched_callsigns
     * const watched_callsigns = await prisma.watched_callsigns.upsert({
     *   create: {
     *     // ... data to create a Watched_callsigns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watched_callsigns we want to update
     *   }
     * })
    **/
    upsert<T extends watched_callsignsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, watched_callsignsUpsertArgs<ExtArgs>>
    ): Prisma__watched_callsignsClient<$Result.GetResult<Prisma.$watched_callsignsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Watched_callsigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watched_callsignsCountArgs} args - Arguments to filter Watched_callsigns to count.
     * @example
     * // Count the number of Watched_callsigns
     * const count = await prisma.watched_callsigns.count({
     *   where: {
     *     // ... the filter for the Watched_callsigns we want to count
     *   }
     * })
    **/
    count<T extends watched_callsignsCountArgs>(
      args?: Subset<T, watched_callsignsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Watched_callsignsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watched_callsigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watched_callsignsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Watched_callsignsAggregateArgs>(args: Subset<T, Watched_callsignsAggregateArgs>): Prisma.PrismaPromise<GetWatched_callsignsAggregateType<T>>

    /**
     * Group by Watched_callsigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watched_callsignsGroupByArgs} args - Group by arguments.
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
      T extends watched_callsignsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: watched_callsignsGroupByArgs['orderBy'] }
        : { orderBy?: watched_callsignsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, watched_callsignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatched_callsignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the watched_callsigns model
   */
  readonly fields: watched_callsignsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for watched_callsigns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__watched_callsignsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the watched_callsigns model
   */ 
  interface watched_callsignsFieldRefs {
    readonly id: FieldRef<"watched_callsigns", 'Int'>
    readonly cid: FieldRef<"watched_callsigns", 'Int'>
    readonly callsign: FieldRef<"watched_callsigns", 'String'>
    readonly topdown: FieldRef<"watched_callsigns", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * watched_callsigns findUnique
   */
  export type watched_callsignsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * Filter, which watched_callsigns to fetch.
     */
    where: watched_callsignsWhereUniqueInput
  }

  /**
   * watched_callsigns findUniqueOrThrow
   */
  export type watched_callsignsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * Filter, which watched_callsigns to fetch.
     */
    where: watched_callsignsWhereUniqueInput
  }

  /**
   * watched_callsigns findFirst
   */
  export type watched_callsignsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * Filter, which watched_callsigns to fetch.
     */
    where?: watched_callsignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watched_callsigns to fetch.
     */
    orderBy?: watched_callsignsOrderByWithRelationInput | watched_callsignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for watched_callsigns.
     */
    cursor?: watched_callsignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watched_callsigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watched_callsigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of watched_callsigns.
     */
    distinct?: Watched_callsignsScalarFieldEnum | Watched_callsignsScalarFieldEnum[]
  }

  /**
   * watched_callsigns findFirstOrThrow
   */
  export type watched_callsignsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * Filter, which watched_callsigns to fetch.
     */
    where?: watched_callsignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watched_callsigns to fetch.
     */
    orderBy?: watched_callsignsOrderByWithRelationInput | watched_callsignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for watched_callsigns.
     */
    cursor?: watched_callsignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watched_callsigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watched_callsigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of watched_callsigns.
     */
    distinct?: Watched_callsignsScalarFieldEnum | Watched_callsignsScalarFieldEnum[]
  }

  /**
   * watched_callsigns findMany
   */
  export type watched_callsignsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * Filter, which watched_callsigns to fetch.
     */
    where?: watched_callsignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watched_callsigns to fetch.
     */
    orderBy?: watched_callsignsOrderByWithRelationInput | watched_callsignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing watched_callsigns.
     */
    cursor?: watched_callsignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watched_callsigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watched_callsigns.
     */
    skip?: number
    distinct?: Watched_callsignsScalarFieldEnum | Watched_callsignsScalarFieldEnum[]
  }

  /**
   * watched_callsigns create
   */
  export type watched_callsignsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * The data needed to create a watched_callsigns.
     */
    data: XOR<watched_callsignsCreateInput, watched_callsignsUncheckedCreateInput>
  }

  /**
   * watched_callsigns createMany
   */
  export type watched_callsignsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many watched_callsigns.
     */
    data: watched_callsignsCreateManyInput | watched_callsignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * watched_callsigns update
   */
  export type watched_callsignsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * The data needed to update a watched_callsigns.
     */
    data: XOR<watched_callsignsUpdateInput, watched_callsignsUncheckedUpdateInput>
    /**
     * Choose, which watched_callsigns to update.
     */
    where: watched_callsignsWhereUniqueInput
  }

  /**
   * watched_callsigns updateMany
   */
  export type watched_callsignsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update watched_callsigns.
     */
    data: XOR<watched_callsignsUpdateManyMutationInput, watched_callsignsUncheckedUpdateManyInput>
    /**
     * Filter which watched_callsigns to update
     */
    where?: watched_callsignsWhereInput
  }

  /**
   * watched_callsigns upsert
   */
  export type watched_callsignsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * The filter to search for the watched_callsigns to update in case it exists.
     */
    where: watched_callsignsWhereUniqueInput
    /**
     * In case the watched_callsigns found by the `where` argument doesn't exist, create a new watched_callsigns with this data.
     */
    create: XOR<watched_callsignsCreateInput, watched_callsignsUncheckedCreateInput>
    /**
     * In case the watched_callsigns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<watched_callsignsUpdateInput, watched_callsignsUncheckedUpdateInput>
  }

  /**
   * watched_callsigns delete
   */
  export type watched_callsignsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
    /**
     * Filter which watched_callsigns to delete.
     */
    where: watched_callsignsWhereUniqueInput
  }

  /**
   * watched_callsigns deleteMany
   */
  export type watched_callsignsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which watched_callsigns to delete
     */
    where?: watched_callsignsWhereInput
  }

  /**
   * watched_callsigns without action
   */
  export type watched_callsignsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watched_callsigns
     */
    select?: watched_callsignsSelect<ExtArgs> | null
  }


  /**
   * Model ignored_cids
   */

  export type AggregateIgnored_cids = {
    _count: Ignored_cidsCountAggregateOutputType | null
    _avg: Ignored_cidsAvgAggregateOutputType | null
    _sum: Ignored_cidsSumAggregateOutputType | null
    _min: Ignored_cidsMinAggregateOutputType | null
    _max: Ignored_cidsMaxAggregateOutputType | null
  }

  export type Ignored_cidsAvgAggregateOutputType = {
    cid: number | null
  }

  export type Ignored_cidsSumAggregateOutputType = {
    cid: number | null
  }

  export type Ignored_cidsMinAggregateOutputType = {
    cid: number | null
  }

  export type Ignored_cidsMaxAggregateOutputType = {
    cid: number | null
  }

  export type Ignored_cidsCountAggregateOutputType = {
    cid: number
    _all: number
  }


  export type Ignored_cidsAvgAggregateInputType = {
    cid?: true
  }

  export type Ignored_cidsSumAggregateInputType = {
    cid?: true
  }

  export type Ignored_cidsMinAggregateInputType = {
    cid?: true
  }

  export type Ignored_cidsMaxAggregateInputType = {
    cid?: true
  }

  export type Ignored_cidsCountAggregateInputType = {
    cid?: true
    _all?: true
  }

  export type Ignored_cidsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ignored_cids to aggregate.
     */
    where?: ignored_cidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ignored_cids to fetch.
     */
    orderBy?: ignored_cidsOrderByWithRelationInput | ignored_cidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ignored_cidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ignored_cids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ignored_cids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ignored_cids
    **/
    _count?: true | Ignored_cidsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ignored_cidsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ignored_cidsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ignored_cidsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ignored_cidsMaxAggregateInputType
  }

  export type GetIgnored_cidsAggregateType<T extends Ignored_cidsAggregateArgs> = {
        [P in keyof T & keyof AggregateIgnored_cids]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIgnored_cids[P]>
      : GetScalarType<T[P], AggregateIgnored_cids[P]>
  }




  export type ignored_cidsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ignored_cidsWhereInput
    orderBy?: ignored_cidsOrderByWithAggregationInput | ignored_cidsOrderByWithAggregationInput[]
    by: Ignored_cidsScalarFieldEnum[] | Ignored_cidsScalarFieldEnum
    having?: ignored_cidsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ignored_cidsCountAggregateInputType | true
    _avg?: Ignored_cidsAvgAggregateInputType
    _sum?: Ignored_cidsSumAggregateInputType
    _min?: Ignored_cidsMinAggregateInputType
    _max?: Ignored_cidsMaxAggregateInputType
  }

  export type Ignored_cidsGroupByOutputType = {
    cid: number
    _count: Ignored_cidsCountAggregateOutputType | null
    _avg: Ignored_cidsAvgAggregateOutputType | null
    _sum: Ignored_cidsSumAggregateOutputType | null
    _min: Ignored_cidsMinAggregateOutputType | null
    _max: Ignored_cidsMaxAggregateOutputType | null
  }

  type GetIgnored_cidsGroupByPayload<T extends ignored_cidsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ignored_cidsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ignored_cidsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ignored_cidsGroupByOutputType[P]>
            : GetScalarType<T[P], Ignored_cidsGroupByOutputType[P]>
        }
      >
    >


  export type ignored_cidsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
  }, ExtArgs["result"]["ignored_cids"]>


  export type ignored_cidsSelectScalar = {
    cid?: boolean
  }


  export type $ignored_cidsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ignored_cids"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      cid: number
    }, ExtArgs["result"]["ignored_cids"]>
    composites: {}
  }

  type ignored_cidsGetPayload<S extends boolean | null | undefined | ignored_cidsDefaultArgs> = $Result.GetResult<Prisma.$ignored_cidsPayload, S>

  type ignored_cidsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ignored_cidsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ignored_cidsCountAggregateInputType | true
    }

  export interface ignored_cidsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ignored_cids'], meta: { name: 'ignored_cids' } }
    /**
     * Find zero or one Ignored_cids that matches the filter.
     * @param {ignored_cidsFindUniqueArgs} args - Arguments to find a Ignored_cids
     * @example
     * // Get one Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ignored_cidsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ignored_cidsFindUniqueArgs<ExtArgs>>
    ): Prisma__ignored_cidsClient<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ignored_cids that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ignored_cidsFindUniqueOrThrowArgs} args - Arguments to find a Ignored_cids
     * @example
     * // Get one Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ignored_cidsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ignored_cidsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ignored_cidsClient<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ignored_cids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ignored_cidsFindFirstArgs} args - Arguments to find a Ignored_cids
     * @example
     * // Get one Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ignored_cidsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ignored_cidsFindFirstArgs<ExtArgs>>
    ): Prisma__ignored_cidsClient<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ignored_cids that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ignored_cidsFindFirstOrThrowArgs} args - Arguments to find a Ignored_cids
     * @example
     * // Get one Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ignored_cidsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ignored_cidsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ignored_cidsClient<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ignored_cids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ignored_cidsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.findMany()
     * 
     * // Get first 10 Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.findMany({ take: 10 })
     * 
     * // Only select the `cid`
     * const ignored_cidsWithCidOnly = await prisma.ignored_cids.findMany({ select: { cid: true } })
     * 
    **/
    findMany<T extends ignored_cidsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ignored_cidsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ignored_cids.
     * @param {ignored_cidsCreateArgs} args - Arguments to create a Ignored_cids.
     * @example
     * // Create one Ignored_cids
     * const Ignored_cids = await prisma.ignored_cids.create({
     *   data: {
     *     // ... data to create a Ignored_cids
     *   }
     * })
     * 
    **/
    create<T extends ignored_cidsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ignored_cidsCreateArgs<ExtArgs>>
    ): Prisma__ignored_cidsClient<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ignored_cids.
     * @param {ignored_cidsCreateManyArgs} args - Arguments to create many Ignored_cids.
     * @example
     * // Create many Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ignored_cidsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ignored_cidsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ignored_cids.
     * @param {ignored_cidsDeleteArgs} args - Arguments to delete one Ignored_cids.
     * @example
     * // Delete one Ignored_cids
     * const Ignored_cids = await prisma.ignored_cids.delete({
     *   where: {
     *     // ... filter to delete one Ignored_cids
     *   }
     * })
     * 
    **/
    delete<T extends ignored_cidsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ignored_cidsDeleteArgs<ExtArgs>>
    ): Prisma__ignored_cidsClient<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ignored_cids.
     * @param {ignored_cidsUpdateArgs} args - Arguments to update one Ignored_cids.
     * @example
     * // Update one Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ignored_cidsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ignored_cidsUpdateArgs<ExtArgs>>
    ): Prisma__ignored_cidsClient<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ignored_cids.
     * @param {ignored_cidsDeleteManyArgs} args - Arguments to filter Ignored_cids to delete.
     * @example
     * // Delete a few Ignored_cids
     * const { count } = await prisma.ignored_cids.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ignored_cidsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ignored_cidsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ignored_cids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ignored_cidsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ignored_cidsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ignored_cidsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ignored_cids.
     * @param {ignored_cidsUpsertArgs} args - Arguments to update or create a Ignored_cids.
     * @example
     * // Update or create a Ignored_cids
     * const ignored_cids = await prisma.ignored_cids.upsert({
     *   create: {
     *     // ... data to create a Ignored_cids
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ignored_cids we want to update
     *   }
     * })
    **/
    upsert<T extends ignored_cidsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ignored_cidsUpsertArgs<ExtArgs>>
    ): Prisma__ignored_cidsClient<$Result.GetResult<Prisma.$ignored_cidsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ignored_cids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ignored_cidsCountArgs} args - Arguments to filter Ignored_cids to count.
     * @example
     * // Count the number of Ignored_cids
     * const count = await prisma.ignored_cids.count({
     *   where: {
     *     // ... the filter for the Ignored_cids we want to count
     *   }
     * })
    **/
    count<T extends ignored_cidsCountArgs>(
      args?: Subset<T, ignored_cidsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ignored_cidsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ignored_cids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ignored_cidsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ignored_cidsAggregateArgs>(args: Subset<T, Ignored_cidsAggregateArgs>): Prisma.PrismaPromise<GetIgnored_cidsAggregateType<T>>

    /**
     * Group by Ignored_cids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ignored_cidsGroupByArgs} args - Group by arguments.
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
      T extends ignored_cidsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ignored_cidsGroupByArgs['orderBy'] }
        : { orderBy?: ignored_cidsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ignored_cidsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIgnored_cidsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ignored_cids model
   */
  readonly fields: ignored_cidsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ignored_cids.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ignored_cidsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ignored_cids model
   */ 
  interface ignored_cidsFieldRefs {
    readonly cid: FieldRef<"ignored_cids", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ignored_cids findUnique
   */
  export type ignored_cidsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * Filter, which ignored_cids to fetch.
     */
    where: ignored_cidsWhereUniqueInput
  }

  /**
   * ignored_cids findUniqueOrThrow
   */
  export type ignored_cidsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * Filter, which ignored_cids to fetch.
     */
    where: ignored_cidsWhereUniqueInput
  }

  /**
   * ignored_cids findFirst
   */
  export type ignored_cidsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * Filter, which ignored_cids to fetch.
     */
    where?: ignored_cidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ignored_cids to fetch.
     */
    orderBy?: ignored_cidsOrderByWithRelationInput | ignored_cidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ignored_cids.
     */
    cursor?: ignored_cidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ignored_cids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ignored_cids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ignored_cids.
     */
    distinct?: Ignored_cidsScalarFieldEnum | Ignored_cidsScalarFieldEnum[]
  }

  /**
   * ignored_cids findFirstOrThrow
   */
  export type ignored_cidsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * Filter, which ignored_cids to fetch.
     */
    where?: ignored_cidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ignored_cids to fetch.
     */
    orderBy?: ignored_cidsOrderByWithRelationInput | ignored_cidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ignored_cids.
     */
    cursor?: ignored_cidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ignored_cids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ignored_cids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ignored_cids.
     */
    distinct?: Ignored_cidsScalarFieldEnum | Ignored_cidsScalarFieldEnum[]
  }

  /**
   * ignored_cids findMany
   */
  export type ignored_cidsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * Filter, which ignored_cids to fetch.
     */
    where?: ignored_cidsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ignored_cids to fetch.
     */
    orderBy?: ignored_cidsOrderByWithRelationInput | ignored_cidsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ignored_cids.
     */
    cursor?: ignored_cidsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ignored_cids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ignored_cids.
     */
    skip?: number
    distinct?: Ignored_cidsScalarFieldEnum | Ignored_cidsScalarFieldEnum[]
  }

  /**
   * ignored_cids create
   */
  export type ignored_cidsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * The data needed to create a ignored_cids.
     */
    data: XOR<ignored_cidsCreateInput, ignored_cidsUncheckedCreateInput>
  }

  /**
   * ignored_cids createMany
   */
  export type ignored_cidsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ignored_cids.
     */
    data: ignored_cidsCreateManyInput | ignored_cidsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ignored_cids update
   */
  export type ignored_cidsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * The data needed to update a ignored_cids.
     */
    data: XOR<ignored_cidsUpdateInput, ignored_cidsUncheckedUpdateInput>
    /**
     * Choose, which ignored_cids to update.
     */
    where: ignored_cidsWhereUniqueInput
  }

  /**
   * ignored_cids updateMany
   */
  export type ignored_cidsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ignored_cids.
     */
    data: XOR<ignored_cidsUpdateManyMutationInput, ignored_cidsUncheckedUpdateManyInput>
    /**
     * Filter which ignored_cids to update
     */
    where?: ignored_cidsWhereInput
  }

  /**
   * ignored_cids upsert
   */
  export type ignored_cidsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * The filter to search for the ignored_cids to update in case it exists.
     */
    where: ignored_cidsWhereUniqueInput
    /**
     * In case the ignored_cids found by the `where` argument doesn't exist, create a new ignored_cids with this data.
     */
    create: XOR<ignored_cidsCreateInput, ignored_cidsUncheckedCreateInput>
    /**
     * In case the ignored_cids was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ignored_cidsUpdateInput, ignored_cidsUncheckedUpdateInput>
  }

  /**
   * ignored_cids delete
   */
  export type ignored_cidsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
    /**
     * Filter which ignored_cids to delete.
     */
    where: ignored_cidsWhereUniqueInput
  }

  /**
   * ignored_cids deleteMany
   */
  export type ignored_cidsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ignored_cids to delete
     */
    where?: ignored_cidsWhereInput
  }

  /**
   * ignored_cids without action
   */
  export type ignored_cidsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ignored_cids
     */
    select?: ignored_cidsSelect<ExtArgs> | null
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


  export const Discord_notificationsScalarFieldEnum: {
    id: 'id',
    cid: 'cid',
    webhook_url: 'webhook_url'
  };

  export type Discord_notificationsScalarFieldEnum = (typeof Discord_notificationsScalarFieldEnum)[keyof typeof Discord_notificationsScalarFieldEnum]


  export const Push_notificationsScalarFieldEnum: {
    id: 'id',
    cid: 'cid',
    endpoint: 'endpoint',
    expiration_time: 'expiration_time',
    p256dh: 'p256dh',
    auth: 'auth'
  };

  export type Push_notificationsScalarFieldEnum = (typeof Push_notificationsScalarFieldEnum)[keyof typeof Push_notificationsScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    session_id: 'session_id',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    created_at: 'created_at'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const Watched_callsignsScalarFieldEnum: {
    id: 'id',
    cid: 'cid',
    callsign: 'callsign',
    topdown: 'topdown'
  };

  export type Watched_callsignsScalarFieldEnum = (typeof Watched_callsignsScalarFieldEnum)[keyof typeof Watched_callsignsScalarFieldEnum]


  export const Ignored_cidsScalarFieldEnum: {
    cid: 'cid'
  };

  export type Ignored_cidsScalarFieldEnum = (typeof Ignored_cidsScalarFieldEnum)[keyof typeof Ignored_cidsScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type discord_notificationsWhereInput = {
    AND?: discord_notificationsWhereInput | discord_notificationsWhereInput[]
    OR?: discord_notificationsWhereInput[]
    NOT?: discord_notificationsWhereInput | discord_notificationsWhereInput[]
    id?: IntFilter<"discord_notifications"> | number
    cid?: IntFilter<"discord_notifications"> | number
    webhook_url?: StringFilter<"discord_notifications"> | string
  }

  export type discord_notificationsOrderByWithRelationInput = {
    id?: SortOrder
    cid?: SortOrder
    webhook_url?: SortOrder
  }

  export type discord_notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: discord_notificationsWhereInput | discord_notificationsWhereInput[]
    OR?: discord_notificationsWhereInput[]
    NOT?: discord_notificationsWhereInput | discord_notificationsWhereInput[]
    cid?: IntFilter<"discord_notifications"> | number
    webhook_url?: StringFilter<"discord_notifications"> | string
  }, "id">

  export type discord_notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    cid?: SortOrder
    webhook_url?: SortOrder
    _count?: discord_notificationsCountOrderByAggregateInput
    _avg?: discord_notificationsAvgOrderByAggregateInput
    _max?: discord_notificationsMaxOrderByAggregateInput
    _min?: discord_notificationsMinOrderByAggregateInput
    _sum?: discord_notificationsSumOrderByAggregateInput
  }

  export type discord_notificationsScalarWhereWithAggregatesInput = {
    AND?: discord_notificationsScalarWhereWithAggregatesInput | discord_notificationsScalarWhereWithAggregatesInput[]
    OR?: discord_notificationsScalarWhereWithAggregatesInput[]
    NOT?: discord_notificationsScalarWhereWithAggregatesInput | discord_notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"discord_notifications"> | number
    cid?: IntWithAggregatesFilter<"discord_notifications"> | number
    webhook_url?: StringWithAggregatesFilter<"discord_notifications"> | string
  }

  export type push_notificationsWhereInput = {
    AND?: push_notificationsWhereInput | push_notificationsWhereInput[]
    OR?: push_notificationsWhereInput[]
    NOT?: push_notificationsWhereInput | push_notificationsWhereInput[]
    id?: IntFilter<"push_notifications"> | number
    cid?: IntFilter<"push_notifications"> | number
    endpoint?: StringFilter<"push_notifications"> | string
    expiration_time?: BigIntNullableFilter<"push_notifications"> | bigint | number | null
    p256dh?: StringFilter<"push_notifications"> | string
    auth?: StringFilter<"push_notifications"> | string
  }

  export type push_notificationsOrderByWithRelationInput = {
    id?: SortOrder
    cid?: SortOrder
    endpoint?: SortOrder
    expiration_time?: SortOrderInput | SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
  }

  export type push_notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: push_notificationsWhereInput | push_notificationsWhereInput[]
    OR?: push_notificationsWhereInput[]
    NOT?: push_notificationsWhereInput | push_notificationsWhereInput[]
    cid?: IntFilter<"push_notifications"> | number
    endpoint?: StringFilter<"push_notifications"> | string
    expiration_time?: BigIntNullableFilter<"push_notifications"> | bigint | number | null
    p256dh?: StringFilter<"push_notifications"> | string
    auth?: StringFilter<"push_notifications"> | string
  }, "id">

  export type push_notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    cid?: SortOrder
    endpoint?: SortOrder
    expiration_time?: SortOrderInput | SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    _count?: push_notificationsCountOrderByAggregateInput
    _avg?: push_notificationsAvgOrderByAggregateInput
    _max?: push_notificationsMaxOrderByAggregateInput
    _min?: push_notificationsMinOrderByAggregateInput
    _sum?: push_notificationsSumOrderByAggregateInput
  }

  export type push_notificationsScalarWhereWithAggregatesInput = {
    AND?: push_notificationsScalarWhereWithAggregatesInput | push_notificationsScalarWhereWithAggregatesInput[]
    OR?: push_notificationsScalarWhereWithAggregatesInput[]
    NOT?: push_notificationsScalarWhereWithAggregatesInput | push_notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"push_notifications"> | number
    cid?: IntWithAggregatesFilter<"push_notifications"> | number
    endpoint?: StringWithAggregatesFilter<"push_notifications"> | string
    expiration_time?: BigIntNullableWithAggregatesFilter<"push_notifications"> | bigint | number | null
    p256dh?: StringWithAggregatesFilter<"push_notifications"> | string
    auth?: StringWithAggregatesFilter<"push_notifications"> | string
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    session_id?: StringFilter<"sessions"> | string
    access_token?: StringFilter<"sessions"> | string
    refresh_token?: StringFilter<"sessions"> | string
    created_at?: DateTimeFilter<"sessions"> | Date | string
  }

  export type sessionsOrderByWithRelationInput = {
    session_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    session_id?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    access_token?: StringFilter<"sessions"> | string
    refresh_token?: StringFilter<"sessions"> | string
    created_at?: DateTimeFilter<"sessions"> | Date | string
  }, "session_id">

  export type sessionsOrderByWithAggregationInput = {
    session_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    session_id?: StringWithAggregatesFilter<"sessions"> | string
    access_token?: StringWithAggregatesFilter<"sessions"> | string
    refresh_token?: StringWithAggregatesFilter<"sessions"> | string
    created_at?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
  }

  export type watched_callsignsWhereInput = {
    AND?: watched_callsignsWhereInput | watched_callsignsWhereInput[]
    OR?: watched_callsignsWhereInput[]
    NOT?: watched_callsignsWhereInput | watched_callsignsWhereInput[]
    id?: IntFilter<"watched_callsigns"> | number
    cid?: IntFilter<"watched_callsigns"> | number
    callsign?: StringFilter<"watched_callsigns"> | string
    topdown?: BoolFilter<"watched_callsigns"> | boolean
  }

  export type watched_callsignsOrderByWithRelationInput = {
    id?: SortOrder
    cid?: SortOrder
    callsign?: SortOrder
    topdown?: SortOrder
  }

  export type watched_callsignsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: watched_callsignsWhereInput | watched_callsignsWhereInput[]
    OR?: watched_callsignsWhereInput[]
    NOT?: watched_callsignsWhereInput | watched_callsignsWhereInput[]
    cid?: IntFilter<"watched_callsigns"> | number
    callsign?: StringFilter<"watched_callsigns"> | string
    topdown?: BoolFilter<"watched_callsigns"> | boolean
  }, "id">

  export type watched_callsignsOrderByWithAggregationInput = {
    id?: SortOrder
    cid?: SortOrder
    callsign?: SortOrder
    topdown?: SortOrder
    _count?: watched_callsignsCountOrderByAggregateInput
    _avg?: watched_callsignsAvgOrderByAggregateInput
    _max?: watched_callsignsMaxOrderByAggregateInput
    _min?: watched_callsignsMinOrderByAggregateInput
    _sum?: watched_callsignsSumOrderByAggregateInput
  }

  export type watched_callsignsScalarWhereWithAggregatesInput = {
    AND?: watched_callsignsScalarWhereWithAggregatesInput | watched_callsignsScalarWhereWithAggregatesInput[]
    OR?: watched_callsignsScalarWhereWithAggregatesInput[]
    NOT?: watched_callsignsScalarWhereWithAggregatesInput | watched_callsignsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"watched_callsigns"> | number
    cid?: IntWithAggregatesFilter<"watched_callsigns"> | number
    callsign?: StringWithAggregatesFilter<"watched_callsigns"> | string
    topdown?: BoolWithAggregatesFilter<"watched_callsigns"> | boolean
  }

  export type ignored_cidsWhereInput = {
    AND?: ignored_cidsWhereInput | ignored_cidsWhereInput[]
    OR?: ignored_cidsWhereInput[]
    NOT?: ignored_cidsWhereInput | ignored_cidsWhereInput[]
    cid?: IntFilter<"ignored_cids"> | number
  }

  export type ignored_cidsOrderByWithRelationInput = {
    cid?: SortOrder
  }

  export type ignored_cidsWhereUniqueInput = Prisma.AtLeast<{
    cid?: number
    AND?: ignored_cidsWhereInput | ignored_cidsWhereInput[]
    OR?: ignored_cidsWhereInput[]
    NOT?: ignored_cidsWhereInput | ignored_cidsWhereInput[]
  }, "cid">

  export type ignored_cidsOrderByWithAggregationInput = {
    cid?: SortOrder
    _count?: ignored_cidsCountOrderByAggregateInput
    _avg?: ignored_cidsAvgOrderByAggregateInput
    _max?: ignored_cidsMaxOrderByAggregateInput
    _min?: ignored_cidsMinOrderByAggregateInput
    _sum?: ignored_cidsSumOrderByAggregateInput
  }

  export type ignored_cidsScalarWhereWithAggregatesInput = {
    AND?: ignored_cidsScalarWhereWithAggregatesInput | ignored_cidsScalarWhereWithAggregatesInput[]
    OR?: ignored_cidsScalarWhereWithAggregatesInput[]
    NOT?: ignored_cidsScalarWhereWithAggregatesInput | ignored_cidsScalarWhereWithAggregatesInput[]
    cid?: IntWithAggregatesFilter<"ignored_cids"> | number
  }

  export type discord_notificationsCreateInput = {
    cid: number
    webhook_url: string
  }

  export type discord_notificationsUncheckedCreateInput = {
    id?: number
    cid: number
    webhook_url: string
  }

  export type discord_notificationsUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
    webhook_url?: StringFieldUpdateOperationsInput | string
  }

  export type discord_notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cid?: IntFieldUpdateOperationsInput | number
    webhook_url?: StringFieldUpdateOperationsInput | string
  }

  export type discord_notificationsCreateManyInput = {
    id?: number
    cid: number
    webhook_url: string
  }

  export type discord_notificationsUpdateManyMutationInput = {
    cid?: IntFieldUpdateOperationsInput | number
    webhook_url?: StringFieldUpdateOperationsInput | string
  }

  export type discord_notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cid?: IntFieldUpdateOperationsInput | number
    webhook_url?: StringFieldUpdateOperationsInput | string
  }

  export type push_notificationsCreateInput = {
    cid: number
    endpoint: string
    expiration_time?: bigint | number | null
    p256dh: string
    auth: string
  }

  export type push_notificationsUncheckedCreateInput = {
    id?: number
    cid: number
    endpoint: string
    expiration_time?: bigint | number | null
    p256dh: string
    auth: string
  }

  export type push_notificationsUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    expiration_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
  }

  export type push_notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cid?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    expiration_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
  }

  export type push_notificationsCreateManyInput = {
    id?: number
    cid: number
    endpoint: string
    expiration_time?: bigint | number | null
    p256dh: string
    auth: string
  }

  export type push_notificationsUpdateManyMutationInput = {
    cid?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    expiration_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
  }

  export type push_notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cid?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    expiration_time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsCreateInput = {
    session_id: string
    access_token: string
    refresh_token: string
    created_at?: Date | string
  }

  export type sessionsUncheckedCreateInput = {
    session_id: string
    access_token: string
    refresh_token: string
    created_at?: Date | string
  }

  export type sessionsUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUncheckedUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsCreateManyInput = {
    session_id: string
    access_token: string
    refresh_token: string
    created_at?: Date | string
  }

  export type sessionsUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUncheckedUpdateManyInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type watched_callsignsCreateInput = {
    cid: number
    callsign: string
    topdown?: boolean
  }

  export type watched_callsignsUncheckedCreateInput = {
    id?: number
    cid: number
    callsign: string
    topdown?: boolean
  }

  export type watched_callsignsUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
    callsign?: StringFieldUpdateOperationsInput | string
    topdown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type watched_callsignsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cid?: IntFieldUpdateOperationsInput | number
    callsign?: StringFieldUpdateOperationsInput | string
    topdown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type watched_callsignsCreateManyInput = {
    id?: number
    cid: number
    callsign: string
    topdown?: boolean
  }

  export type watched_callsignsUpdateManyMutationInput = {
    cid?: IntFieldUpdateOperationsInput | number
    callsign?: StringFieldUpdateOperationsInput | string
    topdown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type watched_callsignsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cid?: IntFieldUpdateOperationsInput | number
    callsign?: StringFieldUpdateOperationsInput | string
    topdown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ignored_cidsCreateInput = {
    cid: number
  }

  export type ignored_cidsUncheckedCreateInput = {
    cid: number
  }

  export type ignored_cidsUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
  }

  export type ignored_cidsUncheckedUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
  }

  export type ignored_cidsCreateManyInput = {
    cid: number
  }

  export type ignored_cidsUpdateManyMutationInput = {
    cid?: IntFieldUpdateOperationsInput | number
  }

  export type ignored_cidsUncheckedUpdateManyInput = {
    cid?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type discord_notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    webhook_url?: SortOrder
  }

  export type discord_notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
  }

  export type discord_notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    webhook_url?: SortOrder
  }

  export type discord_notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    webhook_url?: SortOrder
  }

  export type discord_notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type push_notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    endpoint?: SortOrder
    expiration_time?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
  }

  export type push_notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    expiration_time?: SortOrder
  }

  export type push_notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    endpoint?: SortOrder
    expiration_time?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
  }

  export type push_notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    endpoint?: SortOrder
    expiration_time?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
  }

  export type push_notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    expiration_time?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type sessionsCountOrderByAggregateInput = {
    session_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    session_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    session_id?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type watched_callsignsCountOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    callsign?: SortOrder
    topdown?: SortOrder
  }

  export type watched_callsignsAvgOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
  }

  export type watched_callsignsMaxOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    callsign?: SortOrder
    topdown?: SortOrder
  }

  export type watched_callsignsMinOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
    callsign?: SortOrder
    topdown?: SortOrder
  }

  export type watched_callsignsSumOrderByAggregateInput = {
    id?: SortOrder
    cid?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ignored_cidsCountOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type ignored_cidsAvgOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type ignored_cidsMaxOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type ignored_cidsMinOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type ignored_cidsSumOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use discord_notificationsDefaultArgs instead
     */
    export type discord_notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = discord_notificationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use push_notificationsDefaultArgs instead
     */
    export type push_notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = push_notificationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sessionsDefaultArgs instead
     */
    export type sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sessionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use watched_callsignsDefaultArgs instead
     */
    export type watched_callsignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = watched_callsignsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ignored_cidsDefaultArgs instead
     */
    export type ignored_cidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ignored_cidsDefaultArgs<ExtArgs>

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
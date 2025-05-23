
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
 * Model event_interests
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type event_interests = $Result.DefaultSelection<Prisma.$event_interestsPayload>
/**
 * Model events
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model interests
 * 
 */
export type interests = $Result.DefaultSelection<Prisma.$interestsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Event_interests
 * const event_interests = await prisma.event_interests.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Event_interests
   * const event_interests = await prisma.event_interests.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.event_interests`: Exposes CRUD operations for the **event_interests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_interests
    * const event_interests = await prisma.event_interests.findMany()
    * ```
    */
  get event_interests(): Prisma.event_interestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interests`: Exposes CRUD operations for the **interests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interests.findMany()
    * ```
    */
  get interests(): Prisma.interestsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    event_interests: 'event_interests',
    events: 'events',
    interests: 'interests'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "event_interests" | "events" | "interests"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      event_interests: {
        payload: Prisma.$event_interestsPayload<ExtArgs>
        fields: Prisma.event_interestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.event_interestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.event_interestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>
          }
          findFirst: {
            args: Prisma.event_interestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.event_interestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>
          }
          findMany: {
            args: Prisma.event_interestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>[]
          }
          create: {
            args: Prisma.event_interestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>
          }
          createMany: {
            args: Prisma.event_interestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.event_interestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>[]
          }
          delete: {
            args: Prisma.event_interestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>
          }
          update: {
            args: Prisma.event_interestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>
          }
          deleteMany: {
            args: Prisma.event_interestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.event_interestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.event_interestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>[]
          }
          upsert: {
            args: Prisma.event_interestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_interestsPayload>
          }
          aggregate: {
            args: Prisma.Event_interestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_interests>
          }
          groupBy: {
            args: Prisma.event_interestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_interestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.event_interestsCountArgs<ExtArgs>
            result: $Utils.Optional<Event_interestsCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      interests: {
        payload: Prisma.$interestsPayload<ExtArgs>
        fields: Prisma.interestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.interestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.interestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>
          }
          findFirst: {
            args: Prisma.interestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.interestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>
          }
          findMany: {
            args: Prisma.interestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>[]
          }
          create: {
            args: Prisma.interestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>
          }
          createMany: {
            args: Prisma.interestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.interestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>[]
          }
          delete: {
            args: Prisma.interestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>
          }
          update: {
            args: Prisma.interestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>
          }
          deleteMany: {
            args: Prisma.interestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.interestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.interestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>[]
          }
          upsert: {
            args: Prisma.interestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interestsPayload>
          }
          aggregate: {
            args: Prisma.InterestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterests>
          }
          groupBy: {
            args: Prisma.interestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.interestsCountArgs<ExtArgs>
            result: $Utils.Optional<InterestsCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    event_interests?: event_interestsOmit
    events?: eventsOmit
    interests?: interestsOmit
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
   * Model event_interests
   */

  export type AggregateEvent_interests = {
    _count: Event_interestsCountAggregateOutputType | null
    _avg: Event_interestsAvgAggregateOutputType | null
    _sum: Event_interestsSumAggregateOutputType | null
    _min: Event_interestsMinAggregateOutputType | null
    _max: Event_interestsMaxAggregateOutputType | null
  }

  export type Event_interestsAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    interest_id: number | null
  }

  export type Event_interestsSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    interest_id: number | null
  }

  export type Event_interestsMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    interest_id: number | null
  }

  export type Event_interestsMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    interest_id: number | null
  }

  export type Event_interestsCountAggregateOutputType = {
    id: number
    event_id: number
    interest_id: number
    _all: number
  }


  export type Event_interestsAvgAggregateInputType = {
    id?: true
    event_id?: true
    interest_id?: true
  }

  export type Event_interestsSumAggregateInputType = {
    id?: true
    event_id?: true
    interest_id?: true
  }

  export type Event_interestsMinAggregateInputType = {
    id?: true
    event_id?: true
    interest_id?: true
  }

  export type Event_interestsMaxAggregateInputType = {
    id?: true
    event_id?: true
    interest_id?: true
  }

  export type Event_interestsCountAggregateInputType = {
    id?: true
    event_id?: true
    interest_id?: true
    _all?: true
  }

  export type Event_interestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_interests to aggregate.
     */
    where?: event_interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_interests to fetch.
     */
    orderBy?: event_interestsOrderByWithRelationInput | event_interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: event_interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_interests
    **/
    _count?: true | Event_interestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_interestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_interestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_interestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_interestsMaxAggregateInputType
  }

  export type GetEvent_interestsAggregateType<T extends Event_interestsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_interests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_interests[P]>
      : GetScalarType<T[P], AggregateEvent_interests[P]>
  }




  export type event_interestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_interestsWhereInput
    orderBy?: event_interestsOrderByWithAggregationInput | event_interestsOrderByWithAggregationInput[]
    by: Event_interestsScalarFieldEnum[] | Event_interestsScalarFieldEnum
    having?: event_interestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_interestsCountAggregateInputType | true
    _avg?: Event_interestsAvgAggregateInputType
    _sum?: Event_interestsSumAggregateInputType
    _min?: Event_interestsMinAggregateInputType
    _max?: Event_interestsMaxAggregateInputType
  }

  export type Event_interestsGroupByOutputType = {
    id: number
    event_id: number | null
    interest_id: number | null
    _count: Event_interestsCountAggregateOutputType | null
    _avg: Event_interestsAvgAggregateOutputType | null
    _sum: Event_interestsSumAggregateOutputType | null
    _min: Event_interestsMinAggregateOutputType | null
    _max: Event_interestsMaxAggregateOutputType | null
  }

  type GetEvent_interestsGroupByPayload<T extends event_interestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_interestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_interestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_interestsGroupByOutputType[P]>
            : GetScalarType<T[P], Event_interestsGroupByOutputType[P]>
        }
      >
    >


  export type event_interestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    interest_id?: boolean
  }, ExtArgs["result"]["event_interests"]>

  export type event_interestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    interest_id?: boolean
  }, ExtArgs["result"]["event_interests"]>

  export type event_interestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    interest_id?: boolean
  }, ExtArgs["result"]["event_interests"]>

  export type event_interestsSelectScalar = {
    id?: boolean
    event_id?: boolean
    interest_id?: boolean
  }

  export type event_interestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "interest_id", ExtArgs["result"]["event_interests"]>

  export type $event_interestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event_interests"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number | null
      interest_id: number | null
    }, ExtArgs["result"]["event_interests"]>
    composites: {}
  }

  type event_interestsGetPayload<S extends boolean | null | undefined | event_interestsDefaultArgs> = $Result.GetResult<Prisma.$event_interestsPayload, S>

  type event_interestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<event_interestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Event_interestsCountAggregateInputType | true
    }

  export interface event_interestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event_interests'], meta: { name: 'event_interests' } }
    /**
     * Find zero or one Event_interests that matches the filter.
     * @param {event_interestsFindUniqueArgs} args - Arguments to find a Event_interests
     * @example
     * // Get one Event_interests
     * const event_interests = await prisma.event_interests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends event_interestsFindUniqueArgs>(args: SelectSubset<T, event_interestsFindUniqueArgs<ExtArgs>>): Prisma__event_interestsClient<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event_interests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {event_interestsFindUniqueOrThrowArgs} args - Arguments to find a Event_interests
     * @example
     * // Get one Event_interests
     * const event_interests = await prisma.event_interests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends event_interestsFindUniqueOrThrowArgs>(args: SelectSubset<T, event_interestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__event_interestsClient<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event_interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_interestsFindFirstArgs} args - Arguments to find a Event_interests
     * @example
     * // Get one Event_interests
     * const event_interests = await prisma.event_interests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends event_interestsFindFirstArgs>(args?: SelectSubset<T, event_interestsFindFirstArgs<ExtArgs>>): Prisma__event_interestsClient<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event_interests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_interestsFindFirstOrThrowArgs} args - Arguments to find a Event_interests
     * @example
     * // Get one Event_interests
     * const event_interests = await prisma.event_interests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends event_interestsFindFirstOrThrowArgs>(args?: SelectSubset<T, event_interestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__event_interestsClient<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Event_interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_interestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_interests
     * const event_interests = await prisma.event_interests.findMany()
     * 
     * // Get first 10 Event_interests
     * const event_interests = await prisma.event_interests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_interestsWithIdOnly = await prisma.event_interests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends event_interestsFindManyArgs>(args?: SelectSubset<T, event_interestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event_interests.
     * @param {event_interestsCreateArgs} args - Arguments to create a Event_interests.
     * @example
     * // Create one Event_interests
     * const Event_interests = await prisma.event_interests.create({
     *   data: {
     *     // ... data to create a Event_interests
     *   }
     * })
     * 
     */
    create<T extends event_interestsCreateArgs>(args: SelectSubset<T, event_interestsCreateArgs<ExtArgs>>): Prisma__event_interestsClient<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Event_interests.
     * @param {event_interestsCreateManyArgs} args - Arguments to create many Event_interests.
     * @example
     * // Create many Event_interests
     * const event_interests = await prisma.event_interests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends event_interestsCreateManyArgs>(args?: SelectSubset<T, event_interestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_interests and returns the data saved in the database.
     * @param {event_interestsCreateManyAndReturnArgs} args - Arguments to create many Event_interests.
     * @example
     * // Create many Event_interests
     * const event_interests = await prisma.event_interests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_interests and only return the `id`
     * const event_interestsWithIdOnly = await prisma.event_interests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends event_interestsCreateManyAndReturnArgs>(args?: SelectSubset<T, event_interestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event_interests.
     * @param {event_interestsDeleteArgs} args - Arguments to delete one Event_interests.
     * @example
     * // Delete one Event_interests
     * const Event_interests = await prisma.event_interests.delete({
     *   where: {
     *     // ... filter to delete one Event_interests
     *   }
     * })
     * 
     */
    delete<T extends event_interestsDeleteArgs>(args: SelectSubset<T, event_interestsDeleteArgs<ExtArgs>>): Prisma__event_interestsClient<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event_interests.
     * @param {event_interestsUpdateArgs} args - Arguments to update one Event_interests.
     * @example
     * // Update one Event_interests
     * const event_interests = await prisma.event_interests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends event_interestsUpdateArgs>(args: SelectSubset<T, event_interestsUpdateArgs<ExtArgs>>): Prisma__event_interestsClient<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Event_interests.
     * @param {event_interestsDeleteManyArgs} args - Arguments to filter Event_interests to delete.
     * @example
     * // Delete a few Event_interests
     * const { count } = await prisma.event_interests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends event_interestsDeleteManyArgs>(args?: SelectSubset<T, event_interestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_interestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_interests
     * const event_interests = await prisma.event_interests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends event_interestsUpdateManyArgs>(args: SelectSubset<T, event_interestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_interests and returns the data updated in the database.
     * @param {event_interestsUpdateManyAndReturnArgs} args - Arguments to update many Event_interests.
     * @example
     * // Update many Event_interests
     * const event_interests = await prisma.event_interests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Event_interests and only return the `id`
     * const event_interestsWithIdOnly = await prisma.event_interests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends event_interestsUpdateManyAndReturnArgs>(args: SelectSubset<T, event_interestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event_interests.
     * @param {event_interestsUpsertArgs} args - Arguments to update or create a Event_interests.
     * @example
     * // Update or create a Event_interests
     * const event_interests = await prisma.event_interests.upsert({
     *   create: {
     *     // ... data to create a Event_interests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_interests we want to update
     *   }
     * })
     */
    upsert<T extends event_interestsUpsertArgs>(args: SelectSubset<T, event_interestsUpsertArgs<ExtArgs>>): Prisma__event_interestsClient<$Result.GetResult<Prisma.$event_interestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Event_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_interestsCountArgs} args - Arguments to filter Event_interests to count.
     * @example
     * // Count the number of Event_interests
     * const count = await prisma.event_interests.count({
     *   where: {
     *     // ... the filter for the Event_interests we want to count
     *   }
     * })
    **/
    count<T extends event_interestsCountArgs>(
      args?: Subset<T, event_interestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_interestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_interestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Event_interestsAggregateArgs>(args: Subset<T, Event_interestsAggregateArgs>): Prisma.PrismaPromise<GetEvent_interestsAggregateType<T>>

    /**
     * Group by Event_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_interestsGroupByArgs} args - Group by arguments.
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
      T extends event_interestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: event_interestsGroupByArgs['orderBy'] }
        : { orderBy?: event_interestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, event_interestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_interestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event_interests model
   */
  readonly fields: event_interestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event_interests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__event_interestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the event_interests model
   */
  interface event_interestsFieldRefs {
    readonly id: FieldRef<"event_interests", 'Int'>
    readonly event_id: FieldRef<"event_interests", 'Int'>
    readonly interest_id: FieldRef<"event_interests", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * event_interests findUnique
   */
  export type event_interestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * Filter, which event_interests to fetch.
     */
    where: event_interestsWhereUniqueInput
  }

  /**
   * event_interests findUniqueOrThrow
   */
  export type event_interestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * Filter, which event_interests to fetch.
     */
    where: event_interestsWhereUniqueInput
  }

  /**
   * event_interests findFirst
   */
  export type event_interestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * Filter, which event_interests to fetch.
     */
    where?: event_interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_interests to fetch.
     */
    orderBy?: event_interestsOrderByWithRelationInput | event_interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_interests.
     */
    cursor?: event_interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_interests.
     */
    distinct?: Event_interestsScalarFieldEnum | Event_interestsScalarFieldEnum[]
  }

  /**
   * event_interests findFirstOrThrow
   */
  export type event_interestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * Filter, which event_interests to fetch.
     */
    where?: event_interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_interests to fetch.
     */
    orderBy?: event_interestsOrderByWithRelationInput | event_interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_interests.
     */
    cursor?: event_interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_interests.
     */
    distinct?: Event_interestsScalarFieldEnum | Event_interestsScalarFieldEnum[]
  }

  /**
   * event_interests findMany
   */
  export type event_interestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * Filter, which event_interests to fetch.
     */
    where?: event_interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_interests to fetch.
     */
    orderBy?: event_interestsOrderByWithRelationInput | event_interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_interests.
     */
    cursor?: event_interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_interests.
     */
    skip?: number
    distinct?: Event_interestsScalarFieldEnum | Event_interestsScalarFieldEnum[]
  }

  /**
   * event_interests create
   */
  export type event_interestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * The data needed to create a event_interests.
     */
    data?: XOR<event_interestsCreateInput, event_interestsUncheckedCreateInput>
  }

  /**
   * event_interests createMany
   */
  export type event_interestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many event_interests.
     */
    data: event_interestsCreateManyInput | event_interestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_interests createManyAndReturn
   */
  export type event_interestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * The data used to create many event_interests.
     */
    data: event_interestsCreateManyInput | event_interestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_interests update
   */
  export type event_interestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * The data needed to update a event_interests.
     */
    data: XOR<event_interestsUpdateInput, event_interestsUncheckedUpdateInput>
    /**
     * Choose, which event_interests to update.
     */
    where: event_interestsWhereUniqueInput
  }

  /**
   * event_interests updateMany
   */
  export type event_interestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update event_interests.
     */
    data: XOR<event_interestsUpdateManyMutationInput, event_interestsUncheckedUpdateManyInput>
    /**
     * Filter which event_interests to update
     */
    where?: event_interestsWhereInput
    /**
     * Limit how many event_interests to update.
     */
    limit?: number
  }

  /**
   * event_interests updateManyAndReturn
   */
  export type event_interestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * The data used to update event_interests.
     */
    data: XOR<event_interestsUpdateManyMutationInput, event_interestsUncheckedUpdateManyInput>
    /**
     * Filter which event_interests to update
     */
    where?: event_interestsWhereInput
    /**
     * Limit how many event_interests to update.
     */
    limit?: number
  }

  /**
   * event_interests upsert
   */
  export type event_interestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * The filter to search for the event_interests to update in case it exists.
     */
    where: event_interestsWhereUniqueInput
    /**
     * In case the event_interests found by the `where` argument doesn't exist, create a new event_interests with this data.
     */
    create: XOR<event_interestsCreateInput, event_interestsUncheckedCreateInput>
    /**
     * In case the event_interests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<event_interestsUpdateInput, event_interestsUncheckedUpdateInput>
  }

  /**
   * event_interests delete
   */
  export type event_interestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
    /**
     * Filter which event_interests to delete.
     */
    where: event_interestsWhereUniqueInput
  }

  /**
   * event_interests deleteMany
   */
  export type event_interestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_interests to delete
     */
    where?: event_interestsWhereInput
    /**
     * Limit how many event_interests to delete.
     */
    limit?: number
  }

  /**
   * event_interests without action
   */
  export type event_interestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_interests
     */
    select?: event_interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_interests
     */
    omit?: event_interestsOmit<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    coordinate_one: number | null
    coordinate_two: number | null
    participants_count: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    coordinate_one: number | null
    coordinate_two: number | null
    participants_count: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    coordinate_one: number | null
    coordinate_two: number | null
    direction: string | null
    executor: string | null
    participants_count: number | null
    address: string | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    start_date: Date | null
    end_date: Date | null
    coordinate_one: number | null
    coordinate_two: number | null
    direction: string | null
    executor: string | null
    participants_count: number | null
    address: string | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    title: number
    start_date: number
    end_date: number
    coordinate_one: number
    coordinate_two: number
    direction: number
    executor: number
    participants_count: number
    address: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    coordinate_one?: true
    coordinate_two?: true
    participants_count?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    coordinate_one?: true
    coordinate_two?: true
    participants_count?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    title?: true
    start_date?: true
    end_date?: true
    coordinate_one?: true
    coordinate_two?: true
    direction?: true
    executor?: true
    participants_count?: true
    address?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    title?: true
    start_date?: true
    end_date?: true
    coordinate_one?: true
    coordinate_two?: true
    direction?: true
    executor?: true
    participants_count?: true
    address?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    title?: true
    start_date?: true
    end_date?: true
    coordinate_one?: true
    coordinate_two?: true
    direction?: true
    executor?: true
    participants_count?: true
    address?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    title: string | null
    start_date: Date | null
    end_date: Date | null
    coordinate_one: number | null
    coordinate_two: number | null
    direction: string | null
    executor: string | null
    participants_count: number | null
    address: string | null
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start_date?: boolean
    end_date?: boolean
    coordinate_one?: boolean
    coordinate_two?: boolean
    direction?: boolean
    executor?: boolean
    participants_count?: boolean
    address?: boolean
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start_date?: boolean
    end_date?: boolean
    coordinate_one?: boolean
    coordinate_two?: boolean
    direction?: boolean
    executor?: boolean
    participants_count?: boolean
    address?: boolean
  }, ExtArgs["result"]["events"]>

  export type eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    start_date?: boolean
    end_date?: boolean
    coordinate_one?: boolean
    coordinate_two?: boolean
    direction?: boolean
    executor?: boolean
    participants_count?: boolean
    address?: boolean
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    title?: boolean
    start_date?: boolean
    end_date?: boolean
    coordinate_one?: boolean
    coordinate_two?: boolean
    direction?: boolean
    executor?: boolean
    participants_count?: boolean
    address?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "start_date" | "end_date" | "coordinate_one" | "coordinate_two" | "direction" | "executor" | "participants_count" | "address", ExtArgs["result"]["events"]>

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      start_date: Date | null
      end_date: Date | null
      coordinate_one: number | null
      coordinate_two: number | null
      direction: string | null
      executor: string | null
      participants_count: number | null
      address: string | null
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
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
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly title: FieldRef<"events", 'String'>
    readonly start_date: FieldRef<"events", 'DateTime'>
    readonly end_date: FieldRef<"events", 'DateTime'>
    readonly coordinate_one: FieldRef<"events", 'Float'>
    readonly coordinate_two: FieldRef<"events", 'Float'>
    readonly direction: FieldRef<"events", 'String'>
    readonly executor: FieldRef<"events", 'String'>
    readonly participants_count: FieldRef<"events", 'Int'>
    readonly address: FieldRef<"events", 'String'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data?: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events updateManyAndReturn
   */
  export type eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
  }


  /**
   * Model interests
   */

  export type AggregateInterests = {
    _count: InterestsCountAggregateOutputType | null
    _avg: InterestsAvgAggregateOutputType | null
    _sum: InterestsSumAggregateOutputType | null
    _min: InterestsMinAggregateOutputType | null
    _max: InterestsMaxAggregateOutputType | null
  }

  export type InterestsAvgAggregateOutputType = {
    id: number | null
  }

  export type InterestsSumAggregateOutputType = {
    id: number | null
  }

  export type InterestsMinAggregateOutputType = {
    id: number | null
    title: string | null
    color: string | null
    img: string | null
  }

  export type InterestsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    color: string | null
    img: string | null
  }

  export type InterestsCountAggregateOutputType = {
    id: number
    title: number
    color: number
    img: number
    _all: number
  }


  export type InterestsAvgAggregateInputType = {
    id?: true
  }

  export type InterestsSumAggregateInputType = {
    id?: true
  }

  export type InterestsMinAggregateInputType = {
    id?: true
    title?: true
    color?: true
    img?: true
  }

  export type InterestsMaxAggregateInputType = {
    id?: true
    title?: true
    color?: true
    img?: true
  }

  export type InterestsCountAggregateInputType = {
    id?: true
    title?: true
    color?: true
    img?: true
    _all?: true
  }

  export type InterestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interests to aggregate.
     */
    where?: interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestsOrderByWithRelationInput | interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned interests
    **/
    _count?: true | InterestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestsMaxAggregateInputType
  }

  export type GetInterestsAggregateType<T extends InterestsAggregateArgs> = {
        [P in keyof T & keyof AggregateInterests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterests[P]>
      : GetScalarType<T[P], AggregateInterests[P]>
  }




  export type interestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interestsWhereInput
    orderBy?: interestsOrderByWithAggregationInput | interestsOrderByWithAggregationInput[]
    by: InterestsScalarFieldEnum[] | InterestsScalarFieldEnum
    having?: interestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestsCountAggregateInputType | true
    _avg?: InterestsAvgAggregateInputType
    _sum?: InterestsSumAggregateInputType
    _min?: InterestsMinAggregateInputType
    _max?: InterestsMaxAggregateInputType
  }

  export type InterestsGroupByOutputType = {
    id: number
    title: string | null
    color: string | null
    img: string | null
    _count: InterestsCountAggregateOutputType | null
    _avg: InterestsAvgAggregateOutputType | null
    _sum: InterestsSumAggregateOutputType | null
    _min: InterestsMinAggregateOutputType | null
    _max: InterestsMaxAggregateOutputType | null
  }

  type GetInterestsGroupByPayload<T extends interestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestsGroupByOutputType[P]>
            : GetScalarType<T[P], InterestsGroupByOutputType[P]>
        }
      >
    >


  export type interestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    color?: boolean
    img?: boolean
  }, ExtArgs["result"]["interests"]>

  export type interestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    color?: boolean
    img?: boolean
  }, ExtArgs["result"]["interests"]>

  export type interestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    color?: boolean
    img?: boolean
  }, ExtArgs["result"]["interests"]>

  export type interestsSelectScalar = {
    id?: boolean
    title?: boolean
    color?: boolean
    img?: boolean
  }

  export type interestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "color" | "img", ExtArgs["result"]["interests"]>

  export type $interestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "interests"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      color: string | null
      img: string | null
    }, ExtArgs["result"]["interests"]>
    composites: {}
  }

  type interestsGetPayload<S extends boolean | null | undefined | interestsDefaultArgs> = $Result.GetResult<Prisma.$interestsPayload, S>

  type interestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<interestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestsCountAggregateInputType | true
    }

  export interface interestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['interests'], meta: { name: 'interests' } }
    /**
     * Find zero or one Interests that matches the filter.
     * @param {interestsFindUniqueArgs} args - Arguments to find a Interests
     * @example
     * // Get one Interests
     * const interests = await prisma.interests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends interestsFindUniqueArgs>(args: SelectSubset<T, interestsFindUniqueArgs<ExtArgs>>): Prisma__interestsClient<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {interestsFindUniqueOrThrowArgs} args - Arguments to find a Interests
     * @example
     * // Get one Interests
     * const interests = await prisma.interests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends interestsFindUniqueOrThrowArgs>(args: SelectSubset<T, interestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__interestsClient<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestsFindFirstArgs} args - Arguments to find a Interests
     * @example
     * // Get one Interests
     * const interests = await prisma.interests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends interestsFindFirstArgs>(args?: SelectSubset<T, interestsFindFirstArgs<ExtArgs>>): Prisma__interestsClient<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestsFindFirstOrThrowArgs} args - Arguments to find a Interests
     * @example
     * // Get one Interests
     * const interests = await prisma.interests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends interestsFindFirstOrThrowArgs>(args?: SelectSubset<T, interestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__interestsClient<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interests.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestsWithIdOnly = await prisma.interests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends interestsFindManyArgs>(args?: SelectSubset<T, interestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interests.
     * @param {interestsCreateArgs} args - Arguments to create a Interests.
     * @example
     * // Create one Interests
     * const Interests = await prisma.interests.create({
     *   data: {
     *     // ... data to create a Interests
     *   }
     * })
     * 
     */
    create<T extends interestsCreateArgs>(args: SelectSubset<T, interestsCreateArgs<ExtArgs>>): Prisma__interestsClient<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {interestsCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interests = await prisma.interests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends interestsCreateManyArgs>(args?: SelectSubset<T, interestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interests and returns the data saved in the database.
     * @param {interestsCreateManyAndReturnArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interests = await prisma.interests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interests and only return the `id`
     * const interestsWithIdOnly = await prisma.interests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends interestsCreateManyAndReturnArgs>(args?: SelectSubset<T, interestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interests.
     * @param {interestsDeleteArgs} args - Arguments to delete one Interests.
     * @example
     * // Delete one Interests
     * const Interests = await prisma.interests.delete({
     *   where: {
     *     // ... filter to delete one Interests
     *   }
     * })
     * 
     */
    delete<T extends interestsDeleteArgs>(args: SelectSubset<T, interestsDeleteArgs<ExtArgs>>): Prisma__interestsClient<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interests.
     * @param {interestsUpdateArgs} args - Arguments to update one Interests.
     * @example
     * // Update one Interests
     * const interests = await prisma.interests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends interestsUpdateArgs>(args: SelectSubset<T, interestsUpdateArgs<ExtArgs>>): Prisma__interestsClient<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {interestsDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends interestsDeleteManyArgs>(args?: SelectSubset<T, interestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interests = await prisma.interests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends interestsUpdateManyArgs>(args: SelectSubset<T, interestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests and returns the data updated in the database.
     * @param {interestsUpdateManyAndReturnArgs} args - Arguments to update many Interests.
     * @example
     * // Update many Interests
     * const interests = await prisma.interests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interests and only return the `id`
     * const interestsWithIdOnly = await prisma.interests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends interestsUpdateManyAndReturnArgs>(args: SelectSubset<T, interestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interests.
     * @param {interestsUpsertArgs} args - Arguments to update or create a Interests.
     * @example
     * // Update or create a Interests
     * const interests = await prisma.interests.upsert({
     *   create: {
     *     // ... data to create a Interests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interests we want to update
     *   }
     * })
     */
    upsert<T extends interestsUpsertArgs>(args: SelectSubset<T, interestsUpsertArgs<ExtArgs>>): Prisma__interestsClient<$Result.GetResult<Prisma.$interestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestsCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interests.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends interestsCountArgs>(
      args?: Subset<T, interestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterestsAggregateArgs>(args: Subset<T, InterestsAggregateArgs>): Prisma.PrismaPromise<GetInterestsAggregateType<T>>

    /**
     * Group by Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestsGroupByArgs} args - Group by arguments.
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
      T extends interestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: interestsGroupByArgs['orderBy'] }
        : { orderBy?: interestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, interestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the interests model
   */
  readonly fields: interestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for interests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__interestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the interests model
   */
  interface interestsFieldRefs {
    readonly id: FieldRef<"interests", 'Int'>
    readonly title: FieldRef<"interests", 'String'>
    readonly color: FieldRef<"interests", 'String'>
    readonly img: FieldRef<"interests", 'String'>
  }
    

  // Custom InputTypes
  /**
   * interests findUnique
   */
  export type interestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * Filter, which interests to fetch.
     */
    where: interestsWhereUniqueInput
  }

  /**
   * interests findUniqueOrThrow
   */
  export type interestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * Filter, which interests to fetch.
     */
    where: interestsWhereUniqueInput
  }

  /**
   * interests findFirst
   */
  export type interestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * Filter, which interests to fetch.
     */
    where?: interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestsOrderByWithRelationInput | interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interests.
     */
    cursor?: interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interests.
     */
    distinct?: InterestsScalarFieldEnum | InterestsScalarFieldEnum[]
  }

  /**
   * interests findFirstOrThrow
   */
  export type interestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * Filter, which interests to fetch.
     */
    where?: interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestsOrderByWithRelationInput | interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interests.
     */
    cursor?: interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interests.
     */
    distinct?: InterestsScalarFieldEnum | InterestsScalarFieldEnum[]
  }

  /**
   * interests findMany
   */
  export type interestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * Filter, which interests to fetch.
     */
    where?: interestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestsOrderByWithRelationInput | interestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing interests.
     */
    cursor?: interestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    distinct?: InterestsScalarFieldEnum | InterestsScalarFieldEnum[]
  }

  /**
   * interests create
   */
  export type interestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * The data needed to create a interests.
     */
    data?: XOR<interestsCreateInput, interestsUncheckedCreateInput>
  }

  /**
   * interests createMany
   */
  export type interestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many interests.
     */
    data: interestsCreateManyInput | interestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * interests createManyAndReturn
   */
  export type interestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * The data used to create many interests.
     */
    data: interestsCreateManyInput | interestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * interests update
   */
  export type interestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * The data needed to update a interests.
     */
    data: XOR<interestsUpdateInput, interestsUncheckedUpdateInput>
    /**
     * Choose, which interests to update.
     */
    where: interestsWhereUniqueInput
  }

  /**
   * interests updateMany
   */
  export type interestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update interests.
     */
    data: XOR<interestsUpdateManyMutationInput, interestsUncheckedUpdateManyInput>
    /**
     * Filter which interests to update
     */
    where?: interestsWhereInput
    /**
     * Limit how many interests to update.
     */
    limit?: number
  }

  /**
   * interests updateManyAndReturn
   */
  export type interestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * The data used to update interests.
     */
    data: XOR<interestsUpdateManyMutationInput, interestsUncheckedUpdateManyInput>
    /**
     * Filter which interests to update
     */
    where?: interestsWhereInput
    /**
     * Limit how many interests to update.
     */
    limit?: number
  }

  /**
   * interests upsert
   */
  export type interestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * The filter to search for the interests to update in case it exists.
     */
    where: interestsWhereUniqueInput
    /**
     * In case the interests found by the `where` argument doesn't exist, create a new interests with this data.
     */
    create: XOR<interestsCreateInput, interestsUncheckedCreateInput>
    /**
     * In case the interests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<interestsUpdateInput, interestsUncheckedUpdateInput>
  }

  /**
   * interests delete
   */
  export type interestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
    /**
     * Filter which interests to delete.
     */
    where: interestsWhereUniqueInput
  }

  /**
   * interests deleteMany
   */
  export type interestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interests to delete
     */
    where?: interestsWhereInput
    /**
     * Limit how many interests to delete.
     */
    limit?: number
  }

  /**
   * interests without action
   */
  export type interestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interests
     */
    select?: interestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interests
     */
    omit?: interestsOmit<ExtArgs> | null
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


  export const Event_interestsScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    interest_id: 'interest_id'
  };

  export type Event_interestsScalarFieldEnum = (typeof Event_interestsScalarFieldEnum)[keyof typeof Event_interestsScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    start_date: 'start_date',
    end_date: 'end_date',
    coordinate_one: 'coordinate_one',
    coordinate_two: 'coordinate_two',
    direction: 'direction',
    executor: 'executor',
    participants_count: 'participants_count',
    address: 'address'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const InterestsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    color: 'color',
    img: 'img'
  };

  export type InterestsScalarFieldEnum = (typeof InterestsScalarFieldEnum)[keyof typeof InterestsScalarFieldEnum]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type event_interestsWhereInput = {
    AND?: event_interestsWhereInput | event_interestsWhereInput[]
    OR?: event_interestsWhereInput[]
    NOT?: event_interestsWhereInput | event_interestsWhereInput[]
    id?: IntFilter<"event_interests"> | number
    event_id?: IntNullableFilter<"event_interests"> | number | null
    interest_id?: IntNullableFilter<"event_interests"> | number | null
  }

  export type event_interestsOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    interest_id?: SortOrderInput | SortOrder
  }

  export type event_interestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: event_interestsWhereInput | event_interestsWhereInput[]
    OR?: event_interestsWhereInput[]
    NOT?: event_interestsWhereInput | event_interestsWhereInput[]
    event_id?: IntNullableFilter<"event_interests"> | number | null
    interest_id?: IntNullableFilter<"event_interests"> | number | null
  }, "id">

  export type event_interestsOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    interest_id?: SortOrderInput | SortOrder
    _count?: event_interestsCountOrderByAggregateInput
    _avg?: event_interestsAvgOrderByAggregateInput
    _max?: event_interestsMaxOrderByAggregateInput
    _min?: event_interestsMinOrderByAggregateInput
    _sum?: event_interestsSumOrderByAggregateInput
  }

  export type event_interestsScalarWhereWithAggregatesInput = {
    AND?: event_interestsScalarWhereWithAggregatesInput | event_interestsScalarWhereWithAggregatesInput[]
    OR?: event_interestsScalarWhereWithAggregatesInput[]
    NOT?: event_interestsScalarWhereWithAggregatesInput | event_interestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"event_interests"> | number
    event_id?: IntNullableWithAggregatesFilter<"event_interests"> | number | null
    interest_id?: IntNullableWithAggregatesFilter<"event_interests"> | number | null
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    title?: StringNullableFilter<"events"> | string | null
    start_date?: DateTimeNullableFilter<"events"> | Date | string | null
    end_date?: DateTimeNullableFilter<"events"> | Date | string | null
    coordinate_one?: FloatNullableFilter<"events"> | number | null
    coordinate_two?: FloatNullableFilter<"events"> | number | null
    direction?: StringNullableFilter<"events"> | string | null
    executor?: StringNullableFilter<"events"> | string | null
    participants_count?: IntNullableFilter<"events"> | number | null
    address?: StringNullableFilter<"events"> | string | null
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    coordinate_one?: SortOrderInput | SortOrder
    coordinate_two?: SortOrderInput | SortOrder
    direction?: SortOrderInput | SortOrder
    executor?: SortOrderInput | SortOrder
    participants_count?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    title?: StringNullableFilter<"events"> | string | null
    start_date?: DateTimeNullableFilter<"events"> | Date | string | null
    end_date?: DateTimeNullableFilter<"events"> | Date | string | null
    coordinate_one?: FloatNullableFilter<"events"> | number | null
    coordinate_two?: FloatNullableFilter<"events"> | number | null
    direction?: StringNullableFilter<"events"> | string | null
    executor?: StringNullableFilter<"events"> | string | null
    participants_count?: IntNullableFilter<"events"> | number | null
    address?: StringNullableFilter<"events"> | string | null
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    coordinate_one?: SortOrderInput | SortOrder
    coordinate_two?: SortOrderInput | SortOrder
    direction?: SortOrderInput | SortOrder
    executor?: SortOrderInput | SortOrder
    participants_count?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    title?: StringNullableWithAggregatesFilter<"events"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null
    coordinate_one?: FloatNullableWithAggregatesFilter<"events"> | number | null
    coordinate_two?: FloatNullableWithAggregatesFilter<"events"> | number | null
    direction?: StringNullableWithAggregatesFilter<"events"> | string | null
    executor?: StringNullableWithAggregatesFilter<"events"> | string | null
    participants_count?: IntNullableWithAggregatesFilter<"events"> | number | null
    address?: StringNullableWithAggregatesFilter<"events"> | string | null
  }

  export type interestsWhereInput = {
    AND?: interestsWhereInput | interestsWhereInput[]
    OR?: interestsWhereInput[]
    NOT?: interestsWhereInput | interestsWhereInput[]
    id?: IntFilter<"interests"> | number
    title?: StringNullableFilter<"interests"> | string | null
    color?: StringNullableFilter<"interests"> | string | null
    img?: StringNullableFilter<"interests"> | string | null
  }

  export type interestsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
  }

  export type interestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: interestsWhereInput | interestsWhereInput[]
    OR?: interestsWhereInput[]
    NOT?: interestsWhereInput | interestsWhereInput[]
    title?: StringNullableFilter<"interests"> | string | null
    color?: StringNullableFilter<"interests"> | string | null
    img?: StringNullableFilter<"interests"> | string | null
  }, "id">

  export type interestsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    _count?: interestsCountOrderByAggregateInput
    _avg?: interestsAvgOrderByAggregateInput
    _max?: interestsMaxOrderByAggregateInput
    _min?: interestsMinOrderByAggregateInput
    _sum?: interestsSumOrderByAggregateInput
  }

  export type interestsScalarWhereWithAggregatesInput = {
    AND?: interestsScalarWhereWithAggregatesInput | interestsScalarWhereWithAggregatesInput[]
    OR?: interestsScalarWhereWithAggregatesInput[]
    NOT?: interestsScalarWhereWithAggregatesInput | interestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"interests"> | number
    title?: StringNullableWithAggregatesFilter<"interests"> | string | null
    color?: StringNullableWithAggregatesFilter<"interests"> | string | null
    img?: StringNullableWithAggregatesFilter<"interests"> | string | null
  }

  export type event_interestsCreateInput = {
    event_id?: number | null
    interest_id?: number | null
  }

  export type event_interestsUncheckedCreateInput = {
    id?: number
    event_id?: number | null
    interest_id?: number | null
  }

  export type event_interestsUpdateInput = {
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    interest_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type event_interestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    interest_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type event_interestsCreateManyInput = {
    id?: number
    event_id?: number | null
    interest_id?: number | null
  }

  export type event_interestsUpdateManyMutationInput = {
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    interest_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type event_interestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    interest_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type eventsCreateInput = {
    title?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    coordinate_one?: number | null
    coordinate_two?: number | null
    direction?: string | null
    executor?: string | null
    participants_count?: number | null
    address?: string | null
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    title?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    coordinate_one?: number | null
    coordinate_two?: number | null
    direction?: string | null
    executor?: string | null
    participants_count?: number | null
    address?: string | null
  }

  export type eventsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coordinate_one?: NullableFloatFieldUpdateOperationsInput | number | null
    coordinate_two?: NullableFloatFieldUpdateOperationsInput | number | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    executor?: NullableStringFieldUpdateOperationsInput | string | null
    participants_count?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coordinate_one?: NullableFloatFieldUpdateOperationsInput | number | null
    coordinate_two?: NullableFloatFieldUpdateOperationsInput | number | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    executor?: NullableStringFieldUpdateOperationsInput | string | null
    participants_count?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsCreateManyInput = {
    id?: number
    title?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    coordinate_one?: number | null
    coordinate_two?: number | null
    direction?: string | null
    executor?: string | null
    participants_count?: number | null
    address?: string | null
  }

  export type eventsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coordinate_one?: NullableFloatFieldUpdateOperationsInput | number | null
    coordinate_two?: NullableFloatFieldUpdateOperationsInput | number | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    executor?: NullableStringFieldUpdateOperationsInput | string | null
    participants_count?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coordinate_one?: NullableFloatFieldUpdateOperationsInput | number | null
    coordinate_two?: NullableFloatFieldUpdateOperationsInput | number | null
    direction?: NullableStringFieldUpdateOperationsInput | string | null
    executor?: NullableStringFieldUpdateOperationsInput | string | null
    participants_count?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type interestsCreateInput = {
    title?: string | null
    color?: string | null
    img?: string | null
  }

  export type interestsUncheckedCreateInput = {
    id?: number
    title?: string | null
    color?: string | null
    img?: string | null
  }

  export type interestsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type interestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type interestsCreateManyInput = {
    id?: number
    title?: string | null
    color?: string | null
    img?: string | null
  }

  export type interestsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type interestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type event_interestsCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interest_id?: SortOrder
  }

  export type event_interestsAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interest_id?: SortOrder
  }

  export type event_interestsMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interest_id?: SortOrder
  }

  export type event_interestsMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interest_id?: SortOrder
  }

  export type event_interestsSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interest_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    coordinate_one?: SortOrder
    coordinate_two?: SortOrder
    direction?: SortOrder
    executor?: SortOrder
    participants_count?: SortOrder
    address?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    coordinate_one?: SortOrder
    coordinate_two?: SortOrder
    participants_count?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    coordinate_one?: SortOrder
    coordinate_two?: SortOrder
    direction?: SortOrder
    executor?: SortOrder
    participants_count?: SortOrder
    address?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    coordinate_one?: SortOrder
    coordinate_two?: SortOrder
    direction?: SortOrder
    executor?: SortOrder
    participants_count?: SortOrder
    address?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
    coordinate_one?: SortOrder
    coordinate_two?: SortOrder
    participants_count?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type interestsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    color?: SortOrder
    img?: SortOrder
  }

  export type interestsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type interestsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    color?: SortOrder
    img?: SortOrder
  }

  export type interestsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    color?: SortOrder
    img?: SortOrder
  }

  export type interestsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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
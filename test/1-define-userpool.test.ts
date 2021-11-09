import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as 1DefineUserpool from '../lib/1-define-userpool-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new 1DefineUserpool.1DefineUserpoolStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT));
});

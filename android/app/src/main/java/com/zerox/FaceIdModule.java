package com.zerox;

import android.app.Activity;
import android.content.Intent;
import android.media.FaceDetector;
import android.os.Bundle;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.jetbrains.annotations.NotNull;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Map;

public class FaceIdModule extends ReactContextBaseJavaModule implements ActivityEventListener {
    private static ReactApplicationContext reactContext;
    private DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter = null;
    Promise promise;

    public FaceIdModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        reactContext.addActivityEventListener(this);
    }


    @NotNull
    @Override
    public String getName() {
        return "FaceIdModule";
    }

    @ReactMethod
    public void OpenFaceIdNativeScreen() {
        Intent intent = new Intent(getCurrentActivity(), FaceIdActivity.class);
        intent.putExtra("mode", "simple");
        reactContext.startActivityForResult(intent, 1, null);
    }

    public void sendEvent(String eventName, WritableMap data) {
        if (eventEmitter == null) {
            eventEmitter = getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }
        if (eventEmitter != null) {
            eventEmitter.emit(eventName, data);
        }
    }

    public void errorEvent(String error, String data) {
        if (eventEmitter == null) {
            eventEmitter = getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }
        if (eventEmitter != null) {
            eventEmitter.emit(error, data);
        }

    }


    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (data != null) {
            WritableMap map = new WritableNativeMap();
            String str = data.getStringExtra("code");
            try {
                JSONObject jsonObject = new JSONObject(str);
                map.putString("code", jsonObject.getString("code"));
                map.putString("comp_id", jsonObject.getString("comparison_value"));
                sendEvent("code", map);
            } catch (JSONException e) {
                errorEvent("error", "Olishda xatolik sodir buldi.!");
            }
        } else {
            errorEvent("error", "Olishda xatolik sodir buldi.!");
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}

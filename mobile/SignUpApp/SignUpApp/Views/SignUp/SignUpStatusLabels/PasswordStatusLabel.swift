//
//  PasswordStatusLabel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PasswordStatusLabel: SignUpStatusLabel {
    
    enum status: String {
        case formError = "잘못된 비밀번호 형식입니다."
        case upperCase = "대문자를 넣어주세요."
        case specialCharacterMissing = "특수문자를 넣어주세요."
        case available = "안전한 비밀번호입니다."
        
        func message() -> String {
            return self.rawValue
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    func configure() {
        text = "status message"
        textColor = .clear
        NotificationCenter.default.addObserver(self, selector: #selector(handleStatusChanged), name: SignUpViewModel.PWStatusDidChangeNotification, object: nil)
    }
    
    @objc private func handleStatusChanged(notification: Notification) {
        guard let isValid = notification.userInfo?["isValid"] as? Bool, let status = notification.userInfo?["status"] as? status else { return }
        updateStatus(isValid: isValid, message: status.message())
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self, name: SignUpViewModel.PWStatusDidChangeNotification, object: nil)
    }
}
